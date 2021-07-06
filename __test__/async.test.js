import { getDataFromApi } from '../promise';

describe('probar async/await', () => {
    test('realizar una petición a una api', async() => {
        const api = 'https://rickandmortyapi.com/api/character';
        const getRick = 'https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });
    test('realizando una peticióna una api con error', async() => {
        const apiError = 'http://httpstat.us/404';
        const peticion = getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
    });
    test('resuelve un hola', async() => {
        await expect(Promise.resolve('hola')).resolves.toBe('hola');
        await expect(Promise.resolve('Error')).resolves.toBe('Error');
    });
});