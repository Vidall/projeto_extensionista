export function CalcularIMC(altura: number, peso: number): number {
    if (altura <= 0 || peso <= 0) return 0;

    return peso / (Math.pow(altura, 2));
}