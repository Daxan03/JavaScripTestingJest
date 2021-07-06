import { callbackHell } from "../callbacks";

describe('probando un callback', () => {
    test('callback', done => {
        function otherCallback(data) {
            expect(data).toBe('Hola amigues');
            done();
        }
        callbackHell(otherCallback);
    });
});