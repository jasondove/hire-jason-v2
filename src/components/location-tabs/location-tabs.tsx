import React from 'react';
import classNames from "classnames";
import { type Position, type Location } from 'components/globe/globe.config';

import styles from './location-tabs.module.scss';

interface LocationTabsProps {
    names: Position[];
    locations: Location[][];
    onLocationClick: (location: Location) => void;
}

const LocationTabs: React.FunctionComponent<LocationTabsProps> = (props) => {
    const { names, locations, onLocationClick } = props;

    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabClick = React.useCallback((tabIndex: number) => () => {
        setActiveTab(tabIndex);
    }, []);

    const handleLocationClick = React.useCallback((location: Location) => () => {
        onLocationClick(location);
    }, []);

    const renderLocation = React.useCallback((location: Location) => {
        return <div className={styles.locationItem} onClick={handleLocationClick(location)} key={location.name}>{ location.name }</div>;
    }, []);

    return (
        <div className={styles.locationTabs}>
            <div className={styles.tabs}>
                {names.map((tab, index) => {
                    return (
                        <div
                            className={classNames(styles.tabItem, { [styles.active]: activeTab === index })}
                            onClick={handleTabClick(index)}
                            key={tab}
                        >
                            { tab }
                        </div>
                    );
                })}
            </div>
            <div className={styles.locations}>
                {locations.map((locations: Location[], index) => {
                    return locations.map((location: Location) => (
                        activeTab === index && renderLocation(location)
                    ));
                })}
            </div>
        </div>
    );
};

export default LocationTabs;
