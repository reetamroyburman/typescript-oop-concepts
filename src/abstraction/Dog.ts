import { Animal } from './Animal';

export class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}
