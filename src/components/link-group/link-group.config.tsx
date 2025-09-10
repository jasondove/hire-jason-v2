import Github from './assets/GitHub.svg';
import LinkedIn from './assets/LinkedIn.svg';
// import Indeed from './assets/Indeed.svg';
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
        img: LinkedIn,
        alt: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jason-r-dove/',
        className: styles.linkedIn,
    },
    // @todo: there's no indeed profile link?
    /*{
        img: Indeed,
        alt: 'Indeed',
        link: '#',
        className: styles.indeed,
    },*/
    {
        img: Peerlist,
        alt: 'Peerlist',
        link: 'https://peerlist.io/jasondove',
        className: styles.peerlist,
    },
    {
        img: Github,
        alt: 'Github',
        link: 'https://github.com/jasondove',
        className: styles.gitHub,
    },
];

const animationDelayFactor = 200; // ms

export { linkItems, animationDelayFactor };
