let myFunc = function(first,last="xyz"){
    this.first = first;
    this.last = last;
    console.log(this.first+" "+this.last);

}
let employee = function(){}
myFunc.call(employee,'abc');
myFunc.apply(employee,['abc','xy']);