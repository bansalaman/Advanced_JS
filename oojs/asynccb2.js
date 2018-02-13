let myFunc = function(msg){
    console.log(msg)   
    //block scope-part of local memory
    for(let i=0;i<10;i++){
        //using bind method
        //cannot used with arrow functions
        setTimeout(function(msg){console.log(i+" "+msg)}.bind(this,msg),1000)        
    }

    //function scope - part of heap memory
    for(var j=0;j<10;j++){
        setTimeout(()=>console.log(j),1000)
    }
}
myFunc("Aman");
console.log('Im executed first')