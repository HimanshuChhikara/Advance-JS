let wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2
    }
}

let archer = {
    name: 'Robin',
    health: 90,
}

let destroy = {
    name :'Destroyer',
    health : 100,
    destroy() {
        return this.health = 20
    }
}

console.log("1" , archer);
wizard.heal.apply(archer,[50,20]);
let destoyer = destroy.destroy.bind(archer);
destoyer()
// healArcher();
console.log("2", archer)