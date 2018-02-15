// export default class Mod1{
//     constructor(){
//         console.log('mod1');
//     }
// }
//arrow functions for exporting
// let mod1=()=>{
//     console.log('Mod1');
// }
// let mod2=()=>{
//     console.log('Mod2');
// }
// let mod3=()=>{
//     console.log('Mod3');
// }
// export default {mod1,mod2,mod3};


let Mod1=()=>{
    console.log('Mod1');
}

// export default class Mod1{
//     constructor(){
//         console.log('Mod1')
//     }
// }
export class Mod2{
    constructor(){
        console.log('Mod2')
    }
}
// let  mod3=()=>{
//     console.log('Mod3');
// }
export class Mod3{
    constructor(){
        console.log('Mod3')
    }
}
export default Mod1;

//export default { mod1,mod2,mod3}