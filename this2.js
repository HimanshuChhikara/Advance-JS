const obj = {
    name : 'Billy',
    sing : function() {
        console.log('a', this);
        let anotherFunction = function() {
            console.log('b',this)
        }
        anotherFunction();
    }
}
