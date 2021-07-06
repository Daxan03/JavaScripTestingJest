import { describe, expect, test } from "@jest/globals";
import { arrayFruits, arrayColors } from "../array";

describe('comprobaremos que existe un elemento', () => {
    test('contiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('', () => {
        expect(arrayFruits()).toHaveLength(5);
    });
    test('Comprobaremos que exista un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});