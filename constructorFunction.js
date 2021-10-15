function GetData(name,age) {
    this.name = name;
    this.age = age;
}

GetData.prototype.intro = function() {
    return 'My name is ' + this.name + 'and i am ' + this.age + ' years old'
}

const himanshu = new GetData('Himanshu',24);
const amann = new GetData('Aman',22);


console.log(himanshu.intro())
console.log(amann.intro())