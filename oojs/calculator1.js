var calc = function(x,y,oper){
    switch(oper){
        case "+":
        return x+y;
        break;

        case "-":
        return x-y;
        break;

        case "*":
        return x*y;
        break;
    }
}
console.log(calc(20,30,"+"));
console.log(calc(20,30,"-"));
console.log(calc(20,30,"*"));