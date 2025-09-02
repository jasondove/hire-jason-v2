import { type Location } from "components/globe/globe.config";

const locationsDevOps: Location[] = [
    {
        name: 'Los Angeles',
        position: 'Dev / Ops',
        latitude: 34.0522,
        longitude: -118.2437,
    },
    {
        name: 'Budapest',
        position: 'Dev / Ops',
        latitude: 47.4979,
        longitude: 19.0402,
    },
    {
        name: 'Bucharest',
        position: 'Dev / Ops',
        latitude: 44.4268,
        longitude: 26.1025,
    },
    {
        name: 'Hyderabad',
        position: 'Dev / Ops',
        latitude: 17.3871,
        longitude: 78.4916,
    },
    {
        name: 'Manila',
        position: 'Dev / Ops',
        latitude: 14.5995,
        longitude: 120.9842,
    },
];

const locationsProductBusiness: Location[] = [
    /*{
        name: 'Manhattan, NY',
        position: 'Product / Business',
        latitude: 40.7685,
        longitude: -73.9822,
    },*/
    {
        name: 'Boston',
        position: 'Product / Business',
        latitude: 42.3555,
        longitude: -71.0565,
    },
    {
        name: 'Austin',
        position: 'Product / Business',
        latitude: 30.2672,
        longitude: -97.7431,
    },
    {
        name: 'Montreal',
        position: 'Product / Business',
        latitude: 45.5019,
        longitude: -73.5674,
    },
    {
        name: 'Luxembourg City',
        position: 'Product / Business',
        latitude: 49.6123,
        longitude: 6.1258,
    },
];

const locationsDesignQa: Location[] = [
    {
        name: 'Tampa',
        position: 'Design / QA',
        latitude: 27.9642,
        longitude: -82.4526,
    },
    {
        name: 'Lisbon',
        position: 'Design / QA',
        latitude: 38.7223,
        longitude: -9.1393,
    },
    {
        name: 'São Paulo',
        position: 'Design / QA',
        latitude: -23.5338,
        longitude: -46.6253,
    },
    {
        name: 'Berlin',
        position: 'Design / QA',
        latitude: 52.5200,
        longitude: 13.4050,
    },
];

/*const me: Location[] = [
    {
        name: 'Brooklyn, NY',
        position: 'Jason Dove!',
        latitude: 40.6782,
        longitude: -73.9442,
    },
];*/

export { locationsDevOps, locationsProductBusiness, locationsDesignQa };
