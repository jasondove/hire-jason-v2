import type { COBEOptions } from "cobe";

interface Location {
    name: string;
    position: string;
    latitude: number;
    longitude: number;
}

const globeConfig: COBEOptions = {
    devicePixelRatio: 2,
    dark: 1,
    phi: 0,
    theta: 0.3,
    diffuse: 3,
    mapSamples: 30000,
    mapBrightness: 1.8,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [192 / 255, 192 / 255, 192 / 255], // glow of the globe itself
    width: 0,
    height: 0,
    markers: [],
    onRender: () => {},
};

const springConfig = {
    mass: 1,
    tension: 280,
    friction: 40,
    precision: 0.001,
};

const focusTimeoutDuration = 3000;
const focusSpeed = 0.08;
const doublePi = Math.PI * 2;

export { type Location, globeConfig, springConfig, focusTimeoutDuration, focusSpeed, doublePi };
