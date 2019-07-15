import { square } from './common';

async function main() {
    const { distance } = await import(/* webpackChunkName: "distance" */ './lazy');

    console.log(square(2));
    console.log(distance({x: 0, y: 0}, {x: 3, y: 4}));
}