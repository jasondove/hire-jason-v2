import React, {type Ref} from 'react';
import Globe from 'components/globe';
import MessageBox from 'components/message-box';
import { type Location } from 'components/globe/globe.config';

import { locationsDevOps, locationsProductBusiness, locationsDesignQa } from './locations.config';
import styles from './locations.module.scss';
import LocationTabs from "components/location-tabs";
import Header from "components/header";

interface LocationsProps {
    linksRef: Ref<any>;
    isLinksVisible: boolean;
    isHeaderInPlace: boolean;
}

const Locations: React.FunctionComponent<LocationsProps> = (props) => {
    const { linksRef, isLinksVisible, isHeaderInPlace } = props;

    // @todo: useState causes the globe to rerender, which looks a little janky
    const [focusLocation, setFocusLocation] = React.useState<Location | undefined>(undefined);

    const handleLocationClick = React.useCallback((location: Location) => {
        setFocusLocation(location);
    }, [focusLocation]);

    const handleLocationFocusComplete = React.useCallback(() => {
        setFocusLocation(undefined);
    }, [focusLocation]);

    return (
        <div className={styles.locations}>
            <Header linksRef={linksRef} isVisible={isLinksVisible} isInPlace={isHeaderInPlace} />
            <div className={styles.locationsContent}>
                <Globe
                    locations={[...locationsDevOps, ...locationsProductBusiness, ...locationsDesignQa]}
                    focusLocation={focusLocation}
                    onFocusLocationComplete={handleLocationFocusComplete}
                />
                <MessageBox className={styles.messageBox}>
                    <h3 className={styles.messageHeader}>Brooklyn-based, with a global reach.</h3>
                    <p className={styles.messageText}>
                        With nearly a decade of experience working remotely, I've had the chance to collaborate with talented people from around the world.
                    </p>
                    <LocationTabs
                        names={['Dev / Ops', 'Product / Business', 'Design / QA']}
                        locations={[locationsDevOps, locationsProductBusiness, locationsDesignQa]}
                        onLocationClick={handleLocationClick}
                    />
                </MessageBox>
            </div>
        </div>
    );
};

export default Locations;
