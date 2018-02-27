// const add = (a,b) =>{
//     for(let i=0; i<99999; i++){}
//     return a+b;
// }
// const a =add(3,3);
// const b =add(4,4);
// const c =add(5,5);
// console.log(a);
// console.log(b);
// console.log(c);

// Using as callback

const add = (a,b) =>{
    setTimeout(()=>{
    for(let i=0; i<99999; i++){}
    console.log(a+b);
},5000)}
const a =add(3,3);
const b =add(4,4);
const c =add(5,5);
//call stack
// add(3,3)
// setTimeout
// add(4,4)
// setTimeout
// add(5,5)
// setTimeout
//console.log(6)
//console.log(8)
//console.log(10)