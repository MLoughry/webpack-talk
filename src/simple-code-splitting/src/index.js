export async function main() {
    const { fibonacci } = await import('./fibonacci');
    console.log(fibonacci(10));
}