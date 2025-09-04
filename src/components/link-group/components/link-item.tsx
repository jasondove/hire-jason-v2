import React from 'react';
import classNames from "classnames";

import styles from './link-item.module.scss';

interface LinkItemProps {
    img: string;
    alt: string;
    link: string;
    className: string;
    forceAnimation: boolean;
    forceAnimationDelay: number;
    onForceAnimationEnd?: () => void;
}

const LinkItem: React.FunctionComponent<LinkItemProps> = (props) => {
    const { img, alt, link, className, forceAnimation, forceAnimationDelay, onForceAnimationEnd } = props;
    const [ delay, setDelay ] = React.useState(0);

    React.useEffect(() => {
        setDelay(forceAnimation ? forceAnimationDelay : 0);
    }, [forceAnimation]);

    return (
        <a
            className={classNames(styles.linkItem, { [styles.forceAnimation]: forceAnimation })}
            style={{ animationDelay: `${delay}ms` }}
            href={link}
            target="_blank"
            onAnimationEnd={onForceAnimationEnd}
        >
            <img className={classNames(styles.linkImg, className)} src={img} alt={alt} />
        </a>
    );
};

export default LinkItem;
