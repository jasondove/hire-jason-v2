import React from 'react';
import TitleScrambler from "components/title-scrambler";

import styles from './message-box.module.scss';

const MessageBox: React.FunctionComponent = () => {
    return (
        <div className={styles.messageBox}>
            {/*<p className={styles.smallText}>
                Hi, my name is
            </p>*/}
            <p className={styles.text}>
                Hi, my name is Jason Dove<br />and <TitleScrambler title="I'm a web developer" />.
            </p>
            <p className={styles.smallText}>
                I'm a frontend engineer with decades of experience building beautiful and performant websites, and I'd
                like to work at your company.
            </p>
            <p className={styles.smallText}>
                Please use the links below to get in touch.
            </p>
        </div>
    );
};

export default MessageBox;
