import React from 'react';

import MessageBox from 'components/message-box';
import SplashImg from './assets/img.png';
import styles from './splash.module.scss';

const Splash: React.FunctionComponent = () => {
    return (
        <div className={styles.splash}>
            <img src={SplashImg} alt="new york skyline" className={styles.bgImg} />
            <div className={styles.splashContent}>
                <MessageBox />
            </div>
        </div>
    );
};

export default Splash;
