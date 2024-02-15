isEaten = false

class Animal {
    constructor(name, type, age, size) {
		this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
    }
    info() {
		console.log(`Name: ${this.name}. Type: ${this.type},
        Age: ${this.age}, Size: ${this.size}kg`);
    }
    eat(animal) {
        if(this.type === "Herbivore") {
		    console.log(`Name: ${this.name} does not eat Animals`);
        }
        if(this.type === "Carnivore") {
            console.log(`Name: ${this.name} ate the ${animal}`);
            isEaten = true
        }
    }
}
let tiger = new Animal("Tiger", "Carnivore", "11", 200);
let seal = new Animal("Seal", "Herbivore", "23", 400);
let rabbit = new Animal("Rabbit", "Herbivore", "3", 1);
let cat = new Animal("Cat", "Carnivore", "7", 9);

console.log(tiger);
tiger.info();

isEaten = false
rabbit.eat()
tiger.eat(seal)







