
function add(c,d){
    return this.a + this.b + c + d
}

var o = {a:1, b:4};

var res = add.apply(o,[1,0]);
console.log(res)