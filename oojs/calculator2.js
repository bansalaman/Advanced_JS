let Calculator = function(val){
    this.total = val;
    this.add = function(newVal){
        this.total+=newVal;        
    }
    this.subtract = function(newVal){
        this.total-=newVal;
    }
    this.multiply = function(newVal){
        this.total*=newVal;
    }
    this.getTotal = function(newVal){
        return this.total;
    }
}

let calc = new Calculator(10);
calc.add(10);
calc.subtract(5);
calc.multiply(20);
console.log(calc.getTotal());