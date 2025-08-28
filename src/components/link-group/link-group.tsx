import React from 'react';
import Github from './assets/github.png';
import LinkedIn from './assets/linkedIn.png';

import styles from './link-group.module.scss';

const LinkGroup: React.FunctionComponent = () => {
    return (
        <div className={styles.linkGroup}>
            <a className={styles.link} href="https://www.linkedin.com/in/jason-r-dove/" target="_blank">
                <img className={styles.linkImg} src={LinkedIn} alt="LinkedIn logo" />
            </a>
            <a className={styles.link}   href="https://github.com/jasondove" target="_blank">
                <img className={styles.linkImg} src={Github} alt="Github logo" />
            </a>
        </div>
    );
};

export default LinkGroup;
