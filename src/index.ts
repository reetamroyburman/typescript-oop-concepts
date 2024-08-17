import { SimpleClass } from './classes-and-objects/SimpleClass';
import { BankAccount } from './encapsulation/BankAccount';
import { Dog as InheritanceDog } from './inheritance/Dog';
import { Dog as PolymorphismDog, Cat } from './polymorphism/Animal';
import { Dog as AbstractionDog } from './abstraction/Dog';
import { Cat as AbstractionCat } from './abstraction/Cat';

// Classes and Objects
const person = new SimpleClass('John');
person.greet(); // Output: Hello, John!

// Encapsulation
const account = new BankAccount(1000);
account.deposit(500);
console.log(`Account Balance: ${account.getBalance()}`); // Output: Account Balance: 1500

// Inheritance
const dog = new InheritanceDog('Buddy');
dog.makeSound(); // Output: Buddy barks.

// Polymorphism
const animals = [new PolymorphismDog('Buddy'), new Cat('Whiskers')];
animals.forEach(animal => animal.makeSound());
// Output: 
// Buddy barks.
// Whiskers meows.

// Abstraction
const absDog = new AbstractionDog('Buddy');
absDog.makeSound(); // Output: Buddy barks.
absDog.move();      // Output: Buddy is moving.

const absCat = new AbstractionCat('Whiskers');
absCat.makeSound(); // Output: Whiskers meows.
absCat.move();      // Output: Whiskers is moving.
