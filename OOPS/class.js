class Elf {
    constructor(name,weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'Attack with ' + this.weapon;
    }
}


const newElf = new Elf('Himanshu','Stones');
console.log(newElf.attack());