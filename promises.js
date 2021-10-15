const promise = new Promise( (resolve,reject) => {
    if(true) {
        resolve('Worked')
    }
    else {
        reject('Error Here !!')
    }
} )


const promise2 = new Promise( (resolve,reject) => {
    setTimeout(resolve , 1000, "Hiii");
} ) 

const promise3 = new Promise( (resolve,reject) => {
    setTimeout(resolve, 2000, "Hii Again");
})

const promise4 = new Promise( (resolve,reject) => {
    setTimeout(resolve, 5000, "Ok finally I am here")
})


Promise.all([promise, promise2, promise3, promise4])
    .then( result => {
        console.log(result);
    })