let sum = function(x,y,cb){
    var result = x + y;
    cb(result);
}
//sum(1,5,(res)=>console.log(res))
//sum(1,5,(res)){console.log(res)}.bind(this,res)

let sum1 = function(x,y,cb){
    setTimeout(()=>{
        cb(x+y);
    },1000)
}
//sum1(20,30,(res)=>console.log(res))
