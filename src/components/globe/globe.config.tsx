interface Location {
    name: string;
    position: string;
    latitude: number;
    longitude: number;
}

const focusTimeoutDuration = 3000;
const focusSpeed = 0.08;
const doublePi = Math.PI * 2;

export { type Location, focusTimeoutDuration, focusSpeed, doublePi };
