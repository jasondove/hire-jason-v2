import React from 'react';
import createGlobe from "cobe";
import { useSpring } from 'react-spring';

import { focusTimeoutDuration, focusSpeed } from './globe.config';
import styles from './globe.module.scss';

const Globe: React.FunctionComponent = () => {
    const focusTimeout = React.useRef<NodeJS.Timeout>(undefined);
    const focusPhi = React.useRef<number | null>(null);
    const setFocusPhi = React.useCallback((longitude: number) => {
        if (focusTimeout.current) {
            clearTimeout(focusTimeout.current);
        }

        focusPhi.current = Math.PI - ((longitude * Math.PI) / 180 - Math.PI / 2);
        // focusPhi.current = longitude;
        focusTimeout.current = setTimeout(() => {
            focusPhi.current = null;
        }, focusTimeoutDuration);
    }, [focusTimeout]);



    // const [focusLongVal, setFocusLongVal] = React.useState(null);
    /*const focusLong = React.useCallback((long) => {
        if (focusTimeout.current) {
            clearTimeout(focusTimeout.current);
        }

        setFocusLongVal(long);


        focusTimeout.current = setTimeout(() => {
            setFocusLongVal(null);
            console.log('fire');
        }, globeFocusTimeout);
    }, [focusTimeout]);*/

    /*React.useEffect(() => {
        console.log(focusLong.current);
    }, [focusLong.current]);*/





    const canvasRef = React.useRef(null);
    const pointerInteracting = React.useRef(null);
    const pointerInteractionMovement = React.useRef(0);

    const locationToAngles = (lat, long) => {
        return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
    }
    const focusRef = React.useRef([0, 0]);

    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    React.useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        let phi = 0;
        let width = 0;
        const doublePi = Math.PI * 2;

        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);

        window.addEventListener('resize', onResize);

        onResize();

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
                markers: [
                    { location: [37.78, -122.412], size: 0.1},
                    { location: [52.52, 13.405], size: 0.1},
                    { location: [35.676, 139.65], size: 0.1},
                    { location: [-34.60, -58.38], size: 0.1},
                ],
                onRender: (state) => {
                    state.width = width * 2;
                    state.height = width * 2;

                    // Dragging
                    if (pointerInteracting.current) {
                        state.phi = phi + r.get();
                        // console.log('phi 1', state.phi);
                        return;
                    }

                    // Focus on location
                    if (focusPhi.current) {
                        const distPositive = (focusPhi.current - phi + doublePi) % doublePi;
                        const distNegative = (phi - focusPhi.current + doublePi) % doublePi;
                        // Control the speed
                        if (distPositive < distNegative) {
                            phi += distPositive * focusSpeed;
                        } else {
                            phi -= distNegative * focusSpeed;
                        }

                        state.phi = phi;
                        // console.log('phi 2', state.phi);
                        return;
                    }

                    // Auto-rotate
                    phi += 0.01;
                    state.phi = phi + r.get();
                    // console.log('phi 3', state.phi);
                }
            }
        );


        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <div className={styles.globe}>
            <button onClick={() => {
                focusRef.current = locationToAngles(35.676, 139.65)
            }}>📍 Tokyo</button>
            <button onClick={() => {
                setFocusPhi(139.65);
            }}>📍 Tokyo 2</button>
            <button onClick={() => {
                focusRef.current = locationToAngles(37.78, -122.412)
            }}>📍 San Francisco</button>
            <button onClick={() => {
                focusRef.current = locationToAngles(-34.60, -58.38)
            }}>📍 Buenos Aires</button>

            <div style={{
                width: '100%',
                maxWidth: 600,
                aspectRatio: 1,
                margin: 'auto',
                position: 'relative',
            }}>
                <canvas
                    ref={canvasRef}
                    onPointerDown={(e) => {
                        pointerInteracting.current =
                            e.clientX - pointerInteractionMovement.current;
                        canvasRef.current.style.cursor = 'grabbing';
                    }}
                    onPointerUp={() => {
                        pointerInteracting.current = null;
                        canvasRef.current.style.cursor = 'grab';
                    }}
                    onPointerOut={() => {
                        pointerInteracting.current = null;
                        canvasRef.current.style.cursor = 'grab';
                    }}
                    onMouseMove={(e) => {
                        if (pointerInteracting.current !== null) {
                            const delta = e.clientX - pointerInteracting.current;
                            pointerInteractionMovement.current = delta;
                            api.start({
                                r: delta / 200,
                            });
                        }
                    }}
                    onTouchMove={(e) => {
                        if (pointerInteracting.current !== null && e.touches[0]) {
                            const delta = e.touches[0].clientX - pointerInteracting.current;
                            pointerInteractionMovement.current = delta;
                            api.start({
                                r: delta / 100,
                            });
                        }
                    }}
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
