export const lazyComponent = () => import('./lazyIndex').then(({lazyComponent}) => lazyComponent());
export * from './syncUtil';