const promise = new Promise( (resolve,reject) => {
    if(true) {
        return "Do this"
    }
    resolve()
})
    .then( () => {
        throw new Error('Something Failed');
    })
    .catch( () => {
        console.log('Do that');
    })
    .then( () => {
        console.log('Finally do this');
    });


console.log(promise);