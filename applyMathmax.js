let arr = [2,3,6];

function getMax(arr) {
    return Math.max.apply(null,arr);
}

let res = getMax(arr);
console.log(res);