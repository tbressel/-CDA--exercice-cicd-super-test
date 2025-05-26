export class Maison {
    constructor() {
        this.key = "";
        this.lock = "";
    }
    openHouse(key, lock) {
        if (key && lock) {
            return `la maison est ouverte avec ${key} et ${lock}`;
        }
        return undefined; 
    }

    closeHouse(key, lock) {
        if (key && lock) {
            return `la maison est fermée avec ${key} et ${lock}`;
        }
        return undefined; 
    }
}