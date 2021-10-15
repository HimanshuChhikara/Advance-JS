const multiply = (a) => (b) => a*b;
const multiplyBy5 = multiply(5);

const a = multiplyBy5(10);
console.log(a);