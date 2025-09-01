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
}

const Locations: React.FunctionComponent<LocationsProps> = (props) => {
    const { linksRef, isLinksVisible } = props;

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
            <Header linksRef={linksRef} isVisible={isLinksVisible} />
            <div className={styles.locationsContent}>
                <Globe
                    locations={[...locationsDevOps, ...locationsProductBusiness, ...locationsDesignQa]}
                    focusLocation={focusLocation}
                    onFocusLocationComplete={handleLocationFocusComplete}
                />
                <MessageBox className={styles.messageBox}>
                    <p>Brooklyn-based, with a global reach.</p>
                    <p>With nearly a decade of experience working remotely, I've had the chance to collaborate with talented people from around the world.</p>
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
