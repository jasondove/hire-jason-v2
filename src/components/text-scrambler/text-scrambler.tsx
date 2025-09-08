import React from 'react';
import { useScramble } from 'use-scramble';

import styles from './text-scrambler.module.scss';

interface TextScramblerProps {
    children: string;
}

const TextScrambler: React.FunctionComponent<TextScramblerProps> = (props) => {
    const { children: text } = props;

    const { ref } = useScramble({
        text: text,
        speed: 0.5,
        tick: 1,
        step: 1,
        scramble: 2,
        seed: 0,
        overdrive: false,
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
