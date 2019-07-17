import { createElement } from 'react';

export default function Lazy1Component() {
    return createElement('div', {}, 'I\'m lazy component #1');
}