class Character {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    attack() {
        return "Name is " + this.name;
    }
}

class Elf extends Character {
    constructor(name,age,type) {
        super(name,age)
        console.log(this);
        this.type = type
    }
}

class Hitman extends Character {
    constructor(name,age,power) {
        super(name,age); // Whenever we inherit the class always use super keyword before initiating the properties
        this.power = power;
    }

    sayName() {
        return "My Name is " + this.name +" and I have Power of " + this.power;
    }
}

const doby = new Elf('Doby','21','Hoyse');
// console.log(doby)
// doby.attack()
const rohit = new Hitman('Virat',34,"Cover");
console.log(rohit.sayName())

