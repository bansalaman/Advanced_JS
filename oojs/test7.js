let myFunc = function(a){
    console.log(a);
    return function(b){
        return a+b;
    }
}
//console.log(myFunc(20)(30));

let inst = myFunc(40);
console.log(inst(60));