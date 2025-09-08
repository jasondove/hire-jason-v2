import React from 'react';
import TextScrambler from 'components/text-scrambler';

import styles from './travel-tag.module.scss';

interface TravelTagProps {
    location: string;
    position: string;
}

const TravelTag: React.FunctionComponent<TravelTagProps> = (props) => {
    const { location, position } = props;

    return (
        <div className={styles.travelTag}>
            <div className={styles.handle} />
            <div className={styles.hole} />
            <div className={styles.travelTagContent}>
                <div className={styles.fieldContainer}>
                    <div className={styles.fieldLabel}>Location:</div>
                    <div className={styles.fieldValue}>
                        <TextScrambler>{ location }</TextScrambler>
                    </div>
                </div>
                <div className={styles.positionBg}>
                    <div className={styles.fieldContainer}>
                        <div className={styles.fieldLabel}>Position:</div>
                        <div className={styles.fieldValue}>
                            <TextScrambler>{ position }</TextScrambler>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelTag;
