function heavyDuty() {
    const arr = new Array(7000).fill('😃');

    console.log('Created !!!');
    return arr[788]
}

heavyDuty();
heavyDuty();
heavyDuty();


const getheavyDuty = heavyDuty2();

getheavyDuty();
getheavyDuty();
function heavyDuty2() {
    const arr = new Array(8000).fill('😃');
    console.log('Created Again');
        return function(index) {
            return arr[index]
        }
}