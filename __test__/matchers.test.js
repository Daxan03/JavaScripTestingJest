describe('Comparadores comunes', () => {
    const user = {
        name: "luis",
        lastname: "altamirano"
    };
    const user2 = {
        name: "luis",
        lastname: "altamiran"
    };

    TestWatcher('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });
});