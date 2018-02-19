export default class Observer{
    constructor(){
        this.observers = [];
    }
    attach(cb){
        this.observers.push(cb);
    }
    notify(meal,calorie,totalCalor){
        this.observers.forEach((cb)=>{
            cb(meal,calorie,totalCalor);
        })
    }
}