import React, {type Ref} from 'react';
import LinkGroup from 'components/link-group';
import classNames from 'classnames';

import styles from './header.module.scss';

interface HeaderProps {
    linksRef: Ref<any>;
    isVisible: boolean;
    isInPlace: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const { linksRef, isVisible, isInPlace } = props;
    const [shouldAnimateLinks, setShouldAnimateLinks] = React.useState(false);

    const handleAnimationComplete = React.useCallback(() => {
        setShouldAnimateLinks(false);
    }, []);

    React.useEffect(() => {
        setShouldAnimateLinks(isInPlace);
    }, [isInPlace]);

    return (
        <div className={classNames(styles.header, { [styles.inPlace]: isInPlace })}>
            <div className={styles.headerContent}>
                <LinkGroup
                    ref={linksRef}
                    isVisible={isVisible}
                    shouldAnimate={shouldAnimateLinks}
                    onAnimationComplete={handleAnimationComplete}
                />
            </div>
        </div>
    );
};

export default Header;
