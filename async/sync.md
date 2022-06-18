when you do 

console.log(1)
console.log(2)
console.log(3)

Line by line execution of code is done and this will give you 1,2,3

but how can you make this async

by adding setTimeout function which calls the web API internally and doesn't wait for response and when answer is given it returns that

i.e

console.log(1);
setTimeout(()=> {
    console.log('2')
},2000);
console.log(3)

this will not wait for setTimeout to return

output 
1
3
2
