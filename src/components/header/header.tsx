import React, {type Ref} from 'react';
import LinkGroup from 'components/link-group';

import styles from './header.module.scss';

interface HeaderProps {
    linksRef: Ref<any>;
    isVisible: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const { linksRef, isVisible } = props;

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <LinkGroup ref={linksRef} isVisible={isVisible} />
            </div>
        </div>
    );
};

export default Header;
