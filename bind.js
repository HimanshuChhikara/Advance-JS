const wizard = {
    name : 'Merlin',
    health : 100,
    heal(){
        return this.health = 120;
    }
}

const destroyer = {
    name: 'Alex',
    health : 100,
    destroyHealth(){
        return this.health = 0;
    }
}

const archer = {
    name : 'Robin',
    health: 30,
}

const healArcher = wizard.heal.bind(archer);

console.log(healArcher())
console.log('Archer',archer)

const destroyArcher = destroyer.destroyHealth.bind(archer);
console.log(destroyArcher());   
console.log('Archer destroyed', archer);