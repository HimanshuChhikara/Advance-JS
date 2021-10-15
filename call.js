const wizard = {
    name: 'Merlin',
    health: 80,
    heal(num1,num2){
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin',
    health: 30,
}
    
console.log('1', archer);
wizard.heal.call(archer,50,20);
console.log('2', archer)