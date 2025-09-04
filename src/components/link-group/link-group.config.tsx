import Github from './assets/GitHub.svg';
import LinkedIn from './assets/LinkedIn.svg';
import Indeed from './assets/Indeed.svg';
import Peerlist from './assets/Peerlist.svg';

import styles from './components/link-item.module.scss';

interface LinkItem {
    img: string;
    alt: string;
    link: string;
    className: string;
}

const linkItems: LinkItem[] = [
    {
        img: Github,
        alt: 'Github',
        link: 'https://github.com/jasondove',
        className: styles.gitHub,
    },
    {
        img: LinkedIn,
        alt: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jason-r-dove/',
        className: styles.linkedIn,
    },
    {
        img: Indeed,
        alt: 'Indeed',
        link: '#',
        className: styles.indeed,
    },
    {
        img: Peerlist,
        alt: 'Peerlist',
        link: 'https://peerlist.io/jasondove',
        className: styles.peerlist,
    },
];

const animationDelayFactor = 200; // ms

export { linkItems, animationDelayFactor };
