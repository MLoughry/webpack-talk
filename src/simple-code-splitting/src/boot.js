import { syncCore } from './owa-sync';
import { lazyComponent } from './owa-lazy';

export async function main() {
    syncCore();

    await lazyComponent();
}