import Github from './assets/github.png';
import LinkedIn from './assets/linkedIn.png';

interface LinkItem {
    img: string;
    alt: string;
    link: string;
}

const linkItems: LinkItem[] = [
    {
        img: Github,
        alt: 'Github',
        link: 'https://github.com/jasondove',
    },
    {
        img: LinkedIn,
        alt: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jason-r-dove/',
    },
];

const animationDelayFactor = 200; // ms

export { linkItems, animationDelayFactor };
