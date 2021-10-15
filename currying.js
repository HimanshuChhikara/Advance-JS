function multiply(a,b){
    return a*b;
}

const multiplyByTwo = multiply.bind(this,2);
let multiplyByTen = multiply.bind(this,10);

console.log(multiplyByTwo(10));
console.log(multiplyByTen(90));