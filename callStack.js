const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

console.log(one());