const cache = {};

function memoizedBy80(n){
    if(n in cache) {
        console.log("Here")
        return cache[n]
    }
    else {
        console.log("Long time")
        cache[n] = n + 80
        return cache[n]
    }
}

console.log('1',memoizedBy80(5));
console.log('2',memoizedBy80(21))
console.log('3',memoizedBy80(21))
console.log(cache)