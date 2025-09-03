import React, {type Ref} from 'react';
import MessageBox from 'components/message-box';
import TitleScrambler from 'components/title-scrambler';
import LinkGroup from 'components/link-group';

import SplashImg from './assets/img.png';
import styles from './splash.module.scss';

interface SplashProps {
    opacity: number;
    linksRef: Ref<any>;
    isLinksVisible: boolean;
}

const Splash: React.FunctionComponent<SplashProps> = (props) => {
    const { opacity, linksRef, isLinksVisible } = props;

    return (
        <div className={styles.splash}>
            <img src={SplashImg} alt="new york skyline" className={styles.bgImg} style={{ opacity: `${opacity}%` }} />
            <div className={styles.splashContent} style={{ opacity: `${opacity}%` }}>
                <MessageBox className={styles.messageBox} >
                    <p className={styles.intro}>
                        Hi, my name is
                    </p>
                    <p className={styles.name}>
                        Jason Dove.
                    </p>
                    <p className={styles.title}>
                        <TitleScrambler title="I'm a web developer." />
                    </p>
                    <p className={styles.description}>
                        I have over a decade of experience building beautiful and<br />
                        performant websites, and I'd like to work with you.
                    </p>
                    <div>
                        <LinkGroup ref={linksRef} isVisible={isLinksVisible} />
                    </div>
                </MessageBox>
            </div>
        </div>
    );
};

export default Splash;
