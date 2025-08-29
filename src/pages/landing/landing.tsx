import React from 'react';
import Header from "components/header";
import Splash from "components/splash";
import Locations from "components/locations";

// import styles from './landing.module.scss';

const Landing: React.FunctionComponent = () => {
    return (
        <>
            <Header />
            <Splash />
            <Locations />
        </>
    );
};

export default Landing;
