import React, {type Ref} from 'react';
import LinkGroup from 'components/link-group';

import styles from './header.module.scss';
import classNames from "classnames";

interface HeaderProps {
    linksRef: Ref<any>;
    isVisible: boolean;
    isInPlace: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const { linksRef, isVisible, isInPlace } = props;

    return (
        <div className={classNames(styles.header, { [styles.inPlace]: isInPlace })}>
            <div className={styles.headerContent}>
                <LinkGroup ref={linksRef} isVisible={isVisible} />
            </div>
        </div>
    );
};

export default Header;
