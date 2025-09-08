import React, { type ReactNode } from 'react';

import styles from './hover-text.module.scss';

interface HoverTextProps {
    children: ReactNode;
    onClick?: () => void;
}

const HoverText: React.FunctionComponent<HoverTextProps> = (props) => {
    const { children: text, onClick } = props;

    const handleClick = React.useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    return (
        <span className={styles.hoverText} onClick={handleClick}>
            <span className={styles.text}>{ text }</span>
            <span className={styles.decoration} />
        </span>
    );
};

export default HoverText;
