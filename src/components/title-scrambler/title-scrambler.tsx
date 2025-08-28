import React from 'react';
import { useScramble } from 'use-scramble';
import classNames from 'classnames';

import { titles, scrambleTimeout } from './title-scrambler.config';
import styles from './title-scrambler.module.scss';

interface TitleScramblerProps {
    title: string;
}

const TitleScrambler: React.FunctionComponent<TitleScramblerProps> = (props) => {
    const { title } = props;
    const timeout = React.useRef<NodeJS.Timeout>(undefined);
    const [ isPreTransition, setIsPreTransition ] = React.useState(false);
    const [ isTimeoutActive, setIsTimeoutActive ] = React.useState(false);
    const [ currentTitle, setCurrentTitle ] = React.useState<string>(title);
    const [ possibleTitles, setPossibleTitles ] = React.useState<string[] | []>([]);

    const { ref } = useScramble({
        text: currentTitle,
        speed: 0.6,
        tick: 1,
        step: 1,
        scramble: 4,
        seed: 0,
        overdrive: false,
    });

    const reloadTitles = React.useCallback(() => {
        // This is not a great sort and shouldn't be used for anything important
        setPossibleTitles(titles.sort(() => 0.5 - Math.random()));
    }, [titles]);

    const startTimeout = React.useCallback(() => {
        timeout.current = setTimeout(() => {
            setCurrentTitle(title);
            setIsTimeoutActive(false);
            setIsPreTransition(true);
        }, scrambleTimeout);
        setIsTimeoutActive(true);
    }, []);

    const endTimeout = React.useCallback(() => {
        setIsPreTransition(false);
        clearTimeout(timeout.current);
        setIsTimeoutActive(false);
    }, []);

    const handleClick = React.useCallback(() => {
        if (isTimeoutActive) {
            return;
        }

        endTimeout();
        setCurrentTitle(possibleTitles[0]);
        setPossibleTitles((prev) => prev.slice(1));
        startTimeout();
    }, [isTimeoutActive, possibleTitles]);

    React.useEffect(() => {
        if (!possibleTitles.length) {
            reloadTitles();
        }
    }, [possibleTitles]);

    return (
        <span
            className={classNames(styles.titleScrambler, { [styles.transitionDisabled]: isPreTransition }, { [styles.timeoutActive]: isTimeoutActive })}
            onClick={handleClick}
            ref={ref}
        >
            { currentTitle }
        </span>
    );
};

export default TitleScrambler;
