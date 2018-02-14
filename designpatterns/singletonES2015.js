let instance = null;
let Singleton = class Singleton{
    constructor(){
        //throw new Error('Cannot construct object')
        
        if(!instance){
            instance =  this;
        }
        return instance;
    }

    static getData(){
        return new Date();
    }
}

//module.exports = Singleton;
//if we dont want to import

let inst1 = new Singleton();
let inst2 = new Singleton();
console.log(inst1 === inst2)
console.log(Singleton.getData())