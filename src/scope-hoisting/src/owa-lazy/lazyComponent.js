import { syncUtil } from './syncUtil';

export function lazyComponent() {
    syncUtil();
    console.log("I'm owa-lazy/lazyComponent.js!");
}