let obj = {
    name : "Himanshu",
    class : 33,
    age : 31
}

let obj2 = {
    name : "Himanshu",
    class : 33,
    age : 31
}

let res = JSON.stringify(obj) === JSON.stringify(obj2)
console.log(res)
