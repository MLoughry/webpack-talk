import {square } from '../common';

export function distance({x:x1, y:y1}, {x:x2, y:y2}) {
    return Math.sqrt(square(x1 - x2) + square(y1 - y2));
}