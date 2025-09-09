import React from 'react';
import { useScramble } from 'use-scramble';

import { scrambleConfig } from './text-scrambler.config';
import styles from './text-scrambler.module.scss';

interface TextScramblerProps {
    children: string;
}

const TextScrambler: React.FunctionComponent<TextScramblerProps> = (props) => {
    const { children: text } = props;

    const { ref } = useScramble({
        ...scrambleConfig,
        ...{ text },
    });

    return (
        <span
            className={styles.textScrambler}
            ref={ref}
        >
            { text }
        </span>
    );
};

export default TextScrambler;
