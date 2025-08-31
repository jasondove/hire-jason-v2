import React from 'react';
import MessageBox from 'components/message-box';
import TitleScrambler from "components/title-scrambler";

import SplashImg from './assets/img.png';
import styles from './splash.module.scss';

const Splash: React.FunctionComponent = () => {
    return (
        <div className={styles.splash}>
            <img src={SplashImg} alt="new york skyline" className={styles.bgImg} />
            <div className={styles.splashContent}>
                <MessageBox className={styles.messageBox}>
                    <p className={styles.text}>
                        Hi, my name is Jason Dove<br />and <TitleScrambler title="I'm a web developer" />.
                    </p>
                    <p className={styles.smallText}>
                        I'm a frontend engineer with decades of experience building beautiful and performant websites, and I'd
                        like to work at your company.
                    </p>
                </MessageBox>
            </div>
        </div>
    );
};

export default Splash;
