import React, {type Ref} from 'react';
import Header from 'components/header';
import Globe from 'components/globe';
import { type Location } from 'components/globe/globe.config';

import { locations } from './locations.config';
import styles from './locations.module.scss';

interface LocationsProps {
    linksRef: Ref<any>;
    isLinksVisible: boolean;
    isHeaderInPlace: boolean;
}

const Locations: React.FunctionComponent<LocationsProps> = (props) => {
    const { linksRef, isLinksVisible, isHeaderInPlace } = props;

    // @todo: React.setState causes the globe to rerender, which looks a little janky. Same with scrolling.
    const [focusLocation, setFocusLocation] = React.useState<Location | undefined>(undefined);

    const handleLocationClick = React.useCallback((location: Location) => () => {
        setFocusLocation(location);
    }, [focusLocation]);

    const handleLocationFocusComplete = React.useCallback(() => {
        console.log('complete');
        setFocusLocation(undefined);
    }, []);

    return (
        <div className={styles.locations}>
            <Header linksRef={linksRef} isVisible={isLinksVisible} isInPlace={isHeaderInPlace} />
            <div className={styles.locationsContent}>
                <div className={styles.globeContainer}>
                    <Globe
                        locations={locations}
                        focusLocation={focusLocation}
                        onFocusLocationComplete={handleLocationFocusComplete}
                    />
                </div>
                <div className={styles.messageBox}>
                    <h3 className={styles.messageHeader}>I'm in Brooklyn.<br />My colleagues are around the world.</h3>
                    <p className={styles.messageText}>
                        Remote work isn't remotely an issue. I've worked with talented people from everywhere:
                    </p>
                    <div>
                        {locations.map((loc) => {
                            return (
                                <React.Fragment key={loc.name}>
                                    <span className={styles.locationItem} onClick={handleLocationClick(loc)}>
                                        {/*{loc.name} &middot; {loc.position}*/}
                                        {loc.name}
                                    </span>
                                    <br />
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;
