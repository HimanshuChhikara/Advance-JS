function multiply(num1){
    return function(num2) {
        return num1 * num2;
    }
}

const multiplyByTwo = multiply(2);

multiplyByTwo