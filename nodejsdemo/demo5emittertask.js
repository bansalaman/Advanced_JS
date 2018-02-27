
//const fs = require('fs');
const EventEmitter = require('events');
class ReadFile extends EventEmitter{
    constructor(){
        super();
    }
// readData(c){ 
//     var count = 0;
//     let self = this;
//     var t = setInterval(function(){
//         self.emit('start');
//         self.emit('data',++count);
//         if(count === c){
//             self.emit('done',count);
//             clearInterval(t);
//         }
//     },10) 
            
//  }

readData(c){ 
    var count = 0;
    var t = setInterval(()=>{
        this.emit('start');
        this.emit('data',++count);
        if(count === c){
            this.emit('done',count);
            clearInterval(t);
        }
    },10) 
            
 }
}
 
//subscribing
let eventEmitter = new ReadFile();
eventEmitter.readData(10);
eventEmitter.on('start',()=>console.log('started'))
eventEmitter.on('data',(contents)=>
console.log('Receiving Data '+contents))
eventEmitter.on('error',(err)=>console.error(err))
eventEmitter.on('done',(msg)=>console.log('done'+msg))
console.log('I m first')