import { Animal } from './Animal';

export class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} meows.`);
    }
}
