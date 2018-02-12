var myFunc = function(){
    'use strict';
    var obj = "hello";
    console.log("Hello");
    for(let x = 0; x < 10; x ++){
        console.log(x)
    }
    return {obj}
}
var ref = myFunc();
console.log(ref.obj);