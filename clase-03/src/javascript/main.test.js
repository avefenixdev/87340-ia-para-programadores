const { trigonometricaSeno } = require('./main');

describe('trigonometricaSeno', () => {
    // Casos básicos con valores conocidos
    test('sin(0) debe retornar 0', () => {
        expect(trigonometricaSeno(0)).toBe(0);
    });

    test('sin(π/2) debe retornar 1', () => {
        expect(trigonometricaSeno(Math.PI / 2)).toBeCloseTo(1, 5);
    });

    test('sin(π) debe retornar 0', () => {
        expect(trigonometricaSeno(Math.PI)).toBeCloseTo(0, 5);
    });

    test('sin(3π/2) debe retornar -1', () => {
        expect(trigonometricaSeno(3 * Math.PI / 2)).toBeCloseTo(-1, 5);
    });

    // Casos con ángulos negativos
    test('sin(-π/2) debe retornar -1', () => {
        expect(trigonometricaSeno(-Math.PI / 2)).toBeCloseTo(-1, 5);
    });

    test('sin(-π/6) debe retornar -0.5', () => {
        expect(trigonometricaSeno(-Math.PI / 6)).toBeCloseTo(-0.5, 5);
    });

    // Casos con ángulos en grados convertidos a radianes
    test('sin(30°) = sin(π/6) debe retornar 0.5', () => {
        expect(trigonometricaSeno(Math.PI / 6)).toBeCloseTo(0.5, 5);
    });

    test('sin(45°) = sin(π/4) debe retornar √2/2', () => {
        expect(trigonometricaSeno(Math.PI / 4)).toBeCloseTo(Math.sqrt(2) / 2, 5);
    });

    test('sin(60°) = sin(π/3) debe retornar √3/2', () => {
        expect(trigonometricaSeno(Math.PI / 3)).toBeCloseTo(Math.sqrt(3) / 2, 5);
    });

    // Casos con valores fuera del rango típico
    test('sin(2π) debe retornar 0', () => {
        expect(trigonometricaSeno(2 * Math.PI)).toBeCloseTo(0, 5);
    });

    test('sin(5π/2) debe retornar 1', () => {
        expect(trigonometricaSeno(5 * Math.PI / 2)).toBeCloseTo(1, 5);
    });

    // Casos con números decimales
    test('sin(0.5) debe retornar un número válido', () => {
        const resultado = trigonometricaSeno(0.5);
        expect(resultado).toBeCloseTo(Math.sin(0.5), 10);
    });

    test('sin(1.5) debe retornar un número válido', () => {
        const resultado = trigonometricaSeno(1.5);
        expect(resultado).toBeCloseTo(Math.sin(1.5), 10);
    });
});