import React, {useState} from 'react';
import Splash from "components/splash";
import Locations from "components/locations";

// import styles from './landing.module.scss';

const Landing: React.FunctionComponent = () => {
    const [ isHeaderLinksOnTop, setIsHeaderLinksOnTop ] = useState(false);
    const linksSplashRef = React.useRef(null);
    const linksHeaderRef = React.useRef(null);

    const handleScroll = () => {
        if (!linksSplashRef.current || !linksHeaderRef.current) {
            return
        }

        setIsHeaderLinksOnTop(
            linksSplashRef.current.getBoundingClientRect().top > linksHeaderRef.current.getBoundingClientRect().top
        );
    };

    React.useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/*<Header />*/}
            <Splash linksRef={linksSplashRef} isLinksVisible={!isHeaderLinksOnTop} />
            <Locations linksRef={linksHeaderRef} isLinksVisible={isHeaderLinksOnTop} />
        </>
    );
};

export default Landing;
