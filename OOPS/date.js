Date.prototype.getLastYear = function() {

    return this.getFullYear() - 1;
}


let res = new Date().getLastYear()
console.log(res)
// console.log(date)