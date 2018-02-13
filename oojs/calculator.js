
var add = function(a,b){
    res = a + b;
    return res;
}
var subtract = function(a,b){
    res = a - b;
    return res;
}
var multiply = function(a,b){
    res = a * b;
    return res;
}

console.log("Please enter the values");

console.log(add(5,10));
console.log(subtract(10,5));
console.log(multiply(5,10));

x = 5;
y = 10;
var n = 1;
switch(n)
{
    case 1: var result = add(x,y);
    console.log(result);
    break;

    case 2: var result = subtract(x,y);
    console.log(result);
    break;

    case 3: var result = multiply(x,y);
    console.log(result);
    break;
}