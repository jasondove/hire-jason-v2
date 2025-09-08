import React from 'react';
import Splash from "components/splash";
import Locations from "components/locations";

import { topDistanceOpacityThreshold } from './landing.config';
// import styles from './landing.module.scss';

const Landing: React.FunctionComponent = () => {
    const [ isHeaderLinksOnTop, setIsHeaderLinksOnTop ] = React.useState(false);
    const [ splashOpacity, setSplashOpacity ] = React.useState(50);
    const [ isHeaderInPlace, setIsHeaderInPlace ] = React.useState(false);

    const linksSplashRef = React.useRef(null);
    const linksHeaderRef = React.useRef(null);

    const handleScroll = () => {
        if (!linksSplashRef.current || !linksHeaderRef.current) {
            return
        }

        const headerTop = linksHeaderRef.current.getBoundingClientRect().top;

        // Control which link-group is visible
        setIsHeaderLinksOnTop(linksSplashRef.current.getBoundingClientRect().top > headerTop);

        // Decrease opacity as the header scrolls to the top
        if (headerTop < topDistanceOpacityThreshold) {
            setSplashOpacity((headerTop / topDistanceOpacityThreshold) * 100);
        } else {
            setSplashOpacity(100);
        }

        // Finalize header UI when it's at the top
        if (headerTop === 0) {
            setIsHeaderInPlace(true);
        } else {
            setIsHeaderInPlace(false);
        }
    };

    React.useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Splash opacity={splashOpacity} linksRef={linksSplashRef} isLinksVisible={!isHeaderLinksOnTop} />
            <Locations linksRef={linksHeaderRef} isLinksVisible={isHeaderLinksOnTop} isHeaderInPlace={isHeaderInPlace} />
        </>
    );
};

export default Landing;
