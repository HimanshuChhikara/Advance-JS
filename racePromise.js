// 3 promises 
// 1.parallel
// 2. sequese   
// 3. race


const promisefy = (item,delay) => 
    new Promise((resolve) => 
        setTimeout(() => 
            resolve(item),delay));


const a = () => promisefy('a',9000);
const b = () => promisefy('b',2000);
const c = () => promisefy('c',3000);

console.log(a(),b(),c())
async function promiseParallel() {
    let promises = [a(), b(), c()];
    const [output1, output2,output3] = await Promise.all(promises)

    return `Parallel output is ${output1} and ${output2} and ${output3}`
}

async function raceAll() {
    let promises = [a(), b(), c()];
    let output = await Promise.race(promises)

    return `Race    ${output}`;
}

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();

    return `Sequence ${output1} ${output2} ${output3}`
}

sequence().then(console.log);
raceAll().then(data => console.log(data));
promiseParallel().then(data => console.log(data));
// console.log(ans)