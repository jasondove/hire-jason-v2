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
                    <p className={styles.text}>
                        Hi, my name is Jason Dove<br />and <TitleScrambler title="I'm a web developer" />.
                    </p>
                    <p className={styles.smallText}>
                        I'm a frontend engineer with decades of experience building beautiful and performant websites, and I'd
                        like to work at your company.<br/><br />
                    </p>
                    <div>
                        {<LinkGroup ref={linksRef} isVisible={isLinksVisible} />}
                    </div>
                </MessageBox>
            </div>
        </div>
    );
};

export default Splash;
