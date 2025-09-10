import { type Location } from 'components/globe/globe.config';

const myLocation: Location = {
    name: 'Brooklyn, NY',
    position: 'Frontend Developer',
    latitude: 40.6782,
    longitude: -73.9442,
};

const locations: Location[] = [
    {
        name: 'Austin, Texas',
        position: 'Product Management',
        latitude: 30.2672,
        longitude: -97.7431,
    },
    {
        name: 'Tampa, Florida',
        position: 'Design',
        latitude: 27.9642,
        longitude: -82.4526,
    },
    {
        name: 'Lisbon, Portugal',
        position: 'Manual QA',
        latitude: 38.7223,
        longitude: -9.1393,
    },
    {
        name: 'São Paulo, Brazil',
        position: 'Development',
        latitude: -23.5338,
        longitude: -46.6253,
    },
    {
        name: 'Berlin, Germany',
        position: 'QA Automation',
        latitude: 52.5200,
        longitude: 13.4050,
    },
    {
        name: 'Hyderabad, India',
        position: 'Development',
        latitude: 17.3871,
        longitude: 78.4916,
    },
    {
        name: 'Vancouver, Canada',
        position: 'Product Management',
        latitude: 49.2463,
        longitude: -123.1162,
    },
    {
        name: 'Manila, Phillipines',
        position: 'Development',
        latitude: 14.5995,
        longitude: 120.9842,
    },
    {
        name: 'Budapest, Hungary',
        position: 'Product Management',
        latitude: 47.4979,
        longitude: 19.0402,
    },
    {
        name: 'Bucharest, Romania',
        position: 'Development',
        latitude: 44.4268,
        longitude: 26.1025,
    },
    {
        name: 'Los Angeles, California',
        position: 'IT Operations',
        latitude: 34.0522,
        longitude: -118.2437,
    },
    {
        name: 'Boston, Massachusetts',
        position: 'Business Intelligence',
        latitude: 42.3555,
        longitude: -71.0565,
    },
    {
        name: 'Luxembourg City, Luxembourg',
        position: 'Business Intelligence',
        latitude: 49.6123,
        longitude: 6.1258,
    },
    {
        name: 'London, UK',
        position: 'Business Intelligence',
        latitude:  51.5074,
        longitude: -0.1180,
    }
];

// Hide the tag for viewports shorter than this
const viewportMinHeightForTag = 700; //px

export { myLocation, locations, viewportMinHeightForTag };
