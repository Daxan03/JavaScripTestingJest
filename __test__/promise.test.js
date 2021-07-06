import { getDataFromApi } from "../promise";

describe('probando promesas', () => {
    test('realizando una petición de una api', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });

    test('Resolver un hola!', () => {
        return expect(Promise.resolve('hola!')).resolves.toBe('hola!');
    });

    test('rechaza con un error', () => {
        return expect(Promise.reject('Errror')).rejects.toBe('Errror');
    });

});