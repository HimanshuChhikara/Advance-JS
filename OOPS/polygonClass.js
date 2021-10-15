"use strict"
class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }

    getSides() {
        for(const side in this.sides){
            console.log(side)
        }
    }
}

let newPolygon = new Polygon(1,2,3,4,5,6);
console.log(newPolygon.getSides());