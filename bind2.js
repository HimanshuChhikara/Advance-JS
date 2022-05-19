let wizard = {
    name : 'Merlin',
    power: 100,
    health : 100
}

let destroyer1 = {
    name : 'Panda',
    power : 100,
    destroyHealth(){
        return this.health = 0;
    }
}

console.log(wizard);
let destroyWizard = destroyer1.destroyHealth.bind(wizard);
destroyWizard();
console.log("After destoryed ",wizard)