import React, {type Ref} from 'react';
import Header from 'components/header';
import Globe from 'components/globe';
import HoverText from 'components/hover-text';
import TravelTag from 'components/travel-tag';
import { type Location } from 'components/globe/globe.config';

import { myLocation, locations, viewportMinHeightForTag } from './locations.config';
import styles from './locations.module.scss';

interface LocationsProps {
    linksRef: Ref<any>;
    isLinksVisible: boolean;
    isHeaderInPlace: boolean;
}

const Locations: React.FunctionComponent<LocationsProps> = (props) => {
    const { linksRef, isLinksVisible, isHeaderInPlace } = props;
    const isViewportTooShortForTag = React.useRef<boolean>(false);
    const [possibleLocations, setPossibleLocations] = React.useState<Location[]>([]);
    const [focusLocation, setFocusLocation] = React.useState<Location | undefined>(undefined);

    const handleLocationClick = React.useCallback((location: Location) => () => {
        if (location) {
            setFocusLocation(location);
            return;
        }

        setFocusLocation(possibleLocations[0]);
        setPossibleLocations((prev) => prev.slice(1));
    }, [focusLocation]);

    const handleRandomLocationClick = React.useCallback(() => {
        setFocusLocation(possibleLocations[0]);
        setPossibleLocations((prev) => prev.slice(1));
    }, [possibleLocations, focusLocation]);

    const handleLocationFocusComplete = React.useCallback(() => {
        setFocusLocation(undefined);
    }, []);

    const onResize = React.useCallback(() => {
        isViewportTooShortForTag.current = window.outerHeight < viewportMinHeightForTag;
    }, []);

    const reloadLocations = React.useCallback(() => {
        setPossibleLocations(locations.sort(() => 0.5 - Math.random()));
    }, [locations]);

    onResize();
    window.addEventListener('resize', onResize);

    React.useEffect(() => {
        if (!possibleLocations.length) {
            reloadLocations();
        }
    }, [possibleLocations]);

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
                    <h3 className={styles.messageHeader}>
                        <div>
                            I'm in <HoverText onClick={handleLocationClick(myLocation)}>Brooklyn.</HoverText>
                        </div>
                        <div>
                            My colleagues are
                        </div>
                        <div>
                            <HoverText onClick={handleRandomLocationClick}>around the world.</HoverText>
                        </div>
                    </h3>
                    <p className={styles.messageText}>
                        <span>Remote work isn't remotely an issue. </span>
                        <span className={styles.locationsListSetup}>
                            I've worked with talented people from all over.
                        </span>
                    </p>
                    {isViewportTooShortForTag.current !== true && (
                        <TravelTag location={focusLocation?.name || ''} position={focusLocation?.position || ' '} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Locations;
