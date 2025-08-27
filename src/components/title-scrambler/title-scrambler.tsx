import React from 'react';
import { useScramble } from 'use-scramble';

import { titles, scrambleTimeout } from './title-scrambler.config';
import styles from './title-scrambler.module.scss';

interface TitleScramblerProps {
    title: string;
}

const TitleScrambler: React.FunctionComponent<TitleScramblerProps> = (props) => {
    const { title } = props;
    const [ currentTitle, setCurrentTitle ] = React.useState<string>(title);
    const [ possibleTitles, setPossibleTitles ] = React.useState<string[] | []>([]);
    const timeout = React.useRef<NodeJS.Timeout>(undefined);

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

    const handleClick = React.useCallback(() => {
        clearTimeout(timeout.current);

        setCurrentTitle(possibleTitles[0]);
        setPossibleTitles((prev) => prev.slice(1));

        timeout.current = setTimeout(() => setCurrentTitle(title), scrambleTimeout);
    }, [possibleTitles]);

    React.useEffect(() => {
        if (!possibleTitles.length) {
            reloadTitles();
        }
    }, [possibleTitles]);

    return (
        <span className={styles.titleScrambler} ref={ref} onClick={handleClick}>
            { currentTitle }
        </span>
    );
};

export default TitleScrambler;
