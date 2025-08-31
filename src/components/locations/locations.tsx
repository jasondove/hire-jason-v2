import React from 'react';
import Globe from 'components/globe';
import MessageBox from 'components/message-box';

import { locationList } from './locations.config';
import styles from './locations.module.scss';

const Locations: React.FunctionComponent = () => {
    return (
        <div className={styles.locations}>
            <div className={styles.locationsContent}>
                <MessageBox>
                    I have been around the world.
                </MessageBox>
                <Globe locations={locationList} />
            </div>
        </div>
    );
};

export default Locations;
