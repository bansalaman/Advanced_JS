export default class Observer{
    constructor(){
        this.observers = [];
    }

    attach(cb){
        debugger;
        this.observers.push(cb);
    }
    notify(meals){
        debugger;
        this.observers.forEach((cb)=>{cb(meals)})
    }
}