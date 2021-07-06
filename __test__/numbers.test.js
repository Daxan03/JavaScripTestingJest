import { numbers } from '../numbers';

describe('Comparacion de numeros', () => {
    test('Mayor que', () => {
        expect(numbers(2, 2)).tobeGreaterThan(10);
    });

    test('mayor que o igual', () => {
        expect(numbers(2, 2)).tobeGreaterThanOrEqual(4);
    });

    test('menor que', () => {
        expect(numbers(2, 2)).toBeLessThan(5);
    });

    test('menor que o igual', () => {
        expect(numbers(2, 2)).toBeLessThanOrEquals(5);
    });

    test('numeros flotantes', () => {
        expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
    });
});