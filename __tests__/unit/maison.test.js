import { Maison } from '../../src/Maison/Maison';

describe('Maison', () => {
    let maison;

    beforeEach(() => {
        maison = new Maison();
    });

    test('openHouse() retourne le bon message lorsque key et lock sont fournis', () => {
        const key = 'clé123';
        const lock = 'serrureABC';
        const result = maison.openHouse(key, lock);
        expect(result).toBe(`la maison est ouverte avec ${key} et ${lock}`);
    });

    test('openHouse() retourne undefined si key ou lock ne sont pas fournis', () => {
        const result = maison.openHouse(null, 'serrureABC');
        expect(result).toBeUndefined();
    });

    test('closeHouse() retourne le bon message lorsque key et lock sont fournis', () => {
        const key = 'clé123';
        const lock = 'serrureABC';
        const result = maison.closeHouse(key, lock);
        expect(result).toBe(`la maison est fermée avec ${key} et ${lock}`);
    });

    test('closeHouse() retourne undefined si key ou lock ne sont pas fournis', () => {
        const result = maison.closeHouse('clé123', null);
        expect(result).toBeUndefined();
    });
});


