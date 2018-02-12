let sort1 = function(){
    console.log(this.names.sort());
    //return sortedNames;
}

let asyncFunction = function(){
    this.msg = "Hello";
    //let self = this;
    this.names = ['Name4','Name3','Name1','Name2'];
    //let self = this.names.sort();
    setTimeout(()=>{sort1()},1000)   
    //console.log(sortedNames);
}  
asyncFunction();
console.log('Hello1*****');