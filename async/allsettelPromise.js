const promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 3000);
});
const promise2 = new Promise(function(resolve, reject) {
    setTimeout(reject, 3000);
});

// Promise.all([promise1, promise2]).then((data)=> console.log(data)).catch(e => console.log("Something went wrong"));

Promise.allSettled([promise1, promise2]).then((data)=> console.log(data));