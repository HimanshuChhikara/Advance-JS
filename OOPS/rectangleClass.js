class Rectangle {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.calArea();
    }
    
    calArea() {
        return this.height * this.width;
    }

    giveName(name) {
        this.name =  name;
        return 'Rectangle Name is ' + this.name + ' and Area is ' + this.getArea();
    }
}

let reactangle1 = new Rectangle(100,100)
console.log(reactangle1.giveName('Himanshu'));