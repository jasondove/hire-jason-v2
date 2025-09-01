type Position = 'Dev / Ops' | 'Product / Business' | 'Design / QA';

interface Location {
    name: string;
    position: Position;
    latitude: number;
    longitude: number;
}

const focusTimeoutDuration = 3000;
const focusSpeed = 0.08;
const doublePi = Math.PI * 2;

export { type Location, type Position, focusTimeoutDuration, focusSpeed, doublePi };
