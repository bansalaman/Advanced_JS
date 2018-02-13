class Customer{
    constructor(id,name){
        this.id = id;
        this.name = name; 
    }
    toString(){
        return this.id+" "+this.name
    }
}

class Order{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    toString(){
        return this.id+" "+this.name
    }
}
//module.exports = Customer;
//Customer is object
//Order is class
module.exports = {Customer:new Customer(1,"Some Name"),Order}