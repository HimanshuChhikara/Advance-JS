class Student {
    constructor(name,age,subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    introduction() {
        return "My Name is " + this.name + " and I am " + this.age + " Years Old" + " my teacher is " + this.teacher;
    }
}


class English extends Student{
    constructor(name,age,subject,teacher) {
        super(name,age,subject)
        this.teacher = teacher
    }
}

const himnshu = new English("Himanshu",22,"English","Poonam");
const aman = new English("Aman",23,"Hindi","Rekha")
console.log(himnshu.introduction());
console.log(aman.introduction());
console.log("Aman",aman)
console.log(himnshu instanceof English)
console.log(aman.prototype instanceof English)