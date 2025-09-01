import React, { type Ref } from 'react';
import classNames from "classnames";

import Github from './assets/github.png';
import LinkedIn from './assets/linkedIn.png';
import styles from './link-group.module.scss';

interface LinkGroupProps {
    ref: Ref<any>;
    isVisible: boolean
}

const LinkGroup: React.FunctionComponent<LinkGroupProps> = (props) => {
    const { ref, isVisible } = props;

    return (
        <div className={classNames(styles.linkGroup, { [styles.hidden]: !isVisible })} ref={ref}>
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
