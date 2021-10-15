function PassbyReference(obj) {
    obj = {
        a: 10,
        b: 20,
        c: "hello Himanshu",
    }

    console.log(`inside pass by Reference Function -> obj`);

    console.log(obj);
}

let obj = {
    a: 10,
    b: 20,

}

console.log(`Updating the object Refrernce`);
console.log(`Before calling pass by Reference Function`);
console.log(obj);

PassbyReference(obj);

console.log(`After calling pass by Reference Function -> obj`)
console.log(obj);