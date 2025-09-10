import React, { type ReactNode } from 'react';
import classNames from 'classnames';

import { activeTimeoutDuration } from './hover-text.config';
import styles from './hover-text.module.scss';

interface HoverTextProps {
    children: ReactNode;
    onClick?: () => void;
}

const HoverText: React.FunctionComponent<HoverTextProps> = (props) => {
    const { children: text, onClick } = props;
    const [ isHovering, setIsHovering ] = React.useState(false);
    const [ isActive, setIsActive ] = React.useState(false);
    const activeTimeout = React.useRef<NodeJS.Timeout>(undefined);

    const handleClick = React.useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    const handleMouseEnter = React.useCallback(() => {
        setIsHovering(true);
    }, []);

    const handleMouseLeave = React.useCallback(() => {
        setIsHovering(false);
    }, []);

    const handleTouchStart = React.useCallback(() => {
        setIsActive(true);
        activeTimeout.current = setTimeout(() => {
            setIsActive(false);
            setIsHovering(false);
            clearTimeout(activeTimeout.current);
        }, activeTimeoutDuration);
    }, []);

    return (
        <span
            className={classNames(styles.hoverText, { [styles.active]: isActive }, { [styles.hovering]: isHovering })}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
        >
            <span className={styles.text}>{ text }</span>
            <span className={styles.decoration} />
        </span>
    );
};

export default HoverText;
