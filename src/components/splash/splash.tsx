import React, { type Ref } from 'react';
import HoverText from 'components/hover-text';
import TextScrambler from 'components/text-scrambler';
import LinkGroup from 'components/link-group';

// import SplashImg from './assets/1.png';
// import SplashImg from './assets/2.png';
import SplashImg from './assets/3.png';
// import SplashImg from './assets/4.png';
// import SplashImg from './assets/5.png';
// import SplashImg from './assets/6.png';
import { defaultTitle, titles, scrambleTimeout } from './splash.config';
import styles from './splash.module.scss';

interface SplashProps {
    opacity: number;
    linksRef: Ref<any>;
    isLinksVisible: boolean;
}

const Splash: React.FunctionComponent<SplashProps> = (props) => {
    const { opacity, linksRef, isLinksVisible } = props;
    const [ possibleTitles, setPossibleTitles ] = React.useState<string[]>([]);
    const [ isTimeoutActive, setIsTimeoutActive ] = React.useState(false);
    const [ currentTitle, setCurrentTitle ] = React.useState<string>(defaultTitle);
    const timeout = React.useRef<NodeJS.Timeout>(undefined);

    const startTimeout = React.useCallback(() => {
        timeout.current = setTimeout(() => {
            setCurrentTitle(defaultTitle);
            setIsTimeoutActive(false);
        }, scrambleTimeout);
        setIsTimeoutActive(true);
    }, []);

    const endTimeout = React.useCallback(() => {
        clearTimeout(timeout.current);
        setIsTimeoutActive(false);
    }, []);

    const handleTitleClick = React.useCallback(() => {
        if (isTimeoutActive) {
            return;
        }

        endTimeout();
        setCurrentTitle(possibleTitles[0]);
        setPossibleTitles((prev) => prev.slice(1));
        startTimeout();
    }, [isTimeoutActive, possibleTitles]);

    const reloadTitles = React.useCallback(() => {
        // This is not a great sort and shouldn't be used for anything important
        setPossibleTitles(titles.sort(() => 0.5 - Math.random()));
    }, [titles]);

    React.useEffect(() => {
        if (!possibleTitles.length) {
            reloadTitles();
        }
    }, [possibleTitles]);

    return (
        <div className={styles.splash}>
            <img src={SplashImg} alt="new york skyline with Jason Dove in the foreground" className={styles.bgImg} style={{ opacity: `${opacity}%` }} />
            <div className={styles.gradient} style={{ opacity: `${opacity}%` }}/>
            <div className={styles.splashContent} style={{ opacity: `${opacity}%` }}>
                <div className={styles.messageBox} >
                    <p className={styles.intro}>
                        Hi, my name is
                    </p>
                    <p className={styles.name}>
                        <HoverText>Jason Dove.</HoverText>
                    </p>
                    <p className={styles.title}>
                        <HoverText onClick={handleTitleClick}>
                            <TextScrambler>{ currentTitle }</TextScrambler>
                        </HoverText>
                    </p>
                    <p className={styles.description}>
                        I have over a decade of experience building beautiful and performant websites, and I'd like to work with you.
                    </p>
                    <div>
                        <LinkGroup ref={linksRef} isVisible={isLinksVisible} shouldAnimate={false} onAnimationComplete={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Splash;
