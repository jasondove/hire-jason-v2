import React, { type Ref } from 'react';
import classNames from "classnames";

import { linkItems, animationDelayFactor } from './link-group.config';
import LinkItem from './components/link-item';
import styles from './link-group.module.scss';

interface LinkGroupProps {
    ref: Ref<any>;
    isVisible: boolean;
    shouldAnimate: boolean;
    onAnimationComplete: () => void;
}

const LinkGroup: React.FunctionComponent<LinkGroupProps> = (props) => {
    const { ref, isVisible, shouldAnimate, onAnimationComplete } = props;

    const handleAnimationComplete = React.useCallback(() => {
        if (shouldAnimate) {
            onAnimationComplete();
        }
    }, [shouldAnimate]);

    return (
        <div className={classNames(styles.linkGroup, { [styles.hidden]: !isVisible })} ref={ref}>
            {linkItems.map((item, index) => (
                <LinkItem
                    img={item.img}
                    alt={item.alt}
                    link={item.link}
                    key={item.alt}
                    forceAnimation={shouldAnimate}
                    forceAnimationDelay={animationDelayFactor * index}
                    onForceAnimationEnd={index === linkItems.length - 1 && handleAnimationComplete || undefined}
                />
            ))}
        </div>
    );
};

export default LinkGroup;
