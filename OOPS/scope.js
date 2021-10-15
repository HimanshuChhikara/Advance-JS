function foo() {
    let b = 10;
    function bar(a) {
        console.log(a,b)
    }
    bar(19);
}
foo()
// let res = foo();
// console.log(res)