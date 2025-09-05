import React from 'react';
import createGlobe from "cobe";
import { useSpring } from 'react-spring';
import { useIsVisible } from 'react-is-visible';

import { type Location, focusTimeoutDuration, focusSpeed, doublePi } from './globe.config';
import styles from './globe.module.scss';

interface GlobeProps {
    locations: Location[];
    focusLocation: Location | undefined;
    onFocusLocationComplete: () => void;
}

const Globe: React.FunctionComponent<GlobeProps> = (props) => {
    const { locations, focusLocation, onFocusLocationComplete } = props;
    const focusTimeout = React.useRef<NodeJS.Timeout>(undefined);
    const focusPhi = React.useRef<number | null>(null);
    const canvasRef = React.useRef(null);
    const pointerInteracting = React.useRef<number | null>(null);
    const pointerInteractionMovement = React.useRef(0);
    const isGlobeVisible = useIsVisible(canvasRef);

    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    const setFocus = React.useCallback((location: Location) => {
        if (focusTimeout.current) {
            clearTimeout(focusTimeout.current);
            focusTimeout.current = undefined;
        }

        focusPhi.current = Math.PI - ((location.longitude * Math.PI) / 180 - Math.PI / 2);
        focusTimeout.current = setTimeout(() => {
            completeFocus();
        }, focusTimeoutDuration);
    }, [focusTimeout]);

    const completeFocus = React.useCallback(() => {
        focusPhi.current = null;
        onFocusLocationComplete();
        api.set({ r: 0 });
    }, []);

    const handlePointerActive = React.useCallback((e) => {
        if (!canvasRef.current) {
            return;
        }

        if (focusTimeout.current) {
            clearTimeout(focusTimeout.current);
            focusTimeout.current = undefined;
            completeFocus();
        }

        pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        canvasRef.current.style.cursor = 'grabbing';
    }, [focusPhi]);

    const handlePointerInactive = React.useCallback(() => {
        if (!canvasRef.current) {
            return;
        }

        pointerInteracting.current = null;
        canvasRef.current.style.cursor = 'grab';
    }, []);

    const handleMouseMove = React.useCallback((e) => {
        if (!pointerInteracting.current || focusPhi.current) {
            return;
        }

        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        api.start({
            r: delta / 200,
        });
    }, []);

    const handleTouchMove = React.useCallback((e) => {
        if (!pointerInteracting.current || focusPhi.current) {
            return;
        }

        const delta = e.touches[0].clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        api.start({
            r: delta / 100,
        });
    }, []);

    React.useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        let phi = 0;
        let width = 0;

        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
        onResize();
        window.addEventListener('resize', onResize);

        const globe = createGlobe(
            canvasRef.current,
            {
                devicePixelRatio: 2,
                width: width * 2,
                height: width * 2,
                phi: 0,
                theta: 0.3,
                dark: 1,
                diffuse: 3,
                mapSamples: 16000,
                mapBrightness: 1.2,
                baseColor: [1, 1, 1],
                markerColor: [251 / 255, 100 / 255, 21 / 255],
                glowColor: [1.2, 1.2, 1.2],
                markers: locations.map((loc) => ({
                    location: [loc.latitude, loc.longitude],
                    size: 0.1,
                })),
                onRender: (state) => {
                    state.width = width * 2;
                    state.height = width * 2;

                    // Focus on location
                    if (focusPhi.current) {
                        const distPositive = (focusPhi.current - phi + doublePi) % doublePi;
                        const distNegative = (phi - focusPhi.current + doublePi) % doublePi;

                        if (distPositive < distNegative) {
                            phi += distPositive * focusSpeed;
                        } else {
                            phi -= distNegative * focusSpeed;
                        }

                        state.phi = phi;
                        return;
                    }

                    // Dragging
                    if (pointerInteracting.current) {
                        state.phi = phi + r.get();
                        return;
                    }

                    // Auto-rotate
                    phi += 0.01;
                    state.phi = phi + r.get();
                }
            }
        );

        globe.toggle(isGlobeVisible);

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [isGlobeVisible]);

    React.useEffect(() => {
        if (focusLocation) {
            setFocus(focusLocation);
        }
    }, [focusLocation]);

    return (
        <div className={styles.globe}>
            <div style={{
                width: '100%',
                maxWidth: 600,
                aspectRatio: 1,
                margin: 'auto',
                position: 'relative',
            }}>
                <canvas
                    ref={canvasRef}
                    onPointerDown={handlePointerActive}
                    onPointerUp={handlePointerInactive}
                    onPointerOut={handlePointerInactive}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    style={{
                        width: '100%',
                        height: '100%',
                        cursor: 'grab',
                        contain: 'layout paint size',
                        transition: 'opacity 1s ease',
                    }}
                />
            </div>
        </div>
    );
};

export default Globe;
