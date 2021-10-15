const elfFunctions = {
    attack() {
    return "Name is " + this.name;
    }
}
function elf(name,weapon) {
  let newElf = Object.create(elfFunctions)
  console.log("New Elf s",newElf)
  newElf.name = name;
  console.log("NewElf ",newElf)
  newElf.weapon = weapon;

  return newElf; 
}

const peter = elf('Himanshu','Stones')
console.log(peter.attack());