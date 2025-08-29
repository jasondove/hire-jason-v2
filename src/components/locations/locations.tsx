import React from 'react';
import Globe from 'components/globe';

import styles from './locations.module.scss';

const Locations: React.FunctionComponent = () => {
    return (
        <div className={styles.locations}>
            <div className={styles.locationsContent}>
                <div>Hi I am cool</div>
                <Globe />
            </div>
        </div>
    );
};

export default Locations;
