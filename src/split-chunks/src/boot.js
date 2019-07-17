export async function main() {
    await import(/* webpackChunkName: "lazy1" */ './lazy1');
    await import(/* webpackChunkName: "lazy2" */ './lazy2');
}