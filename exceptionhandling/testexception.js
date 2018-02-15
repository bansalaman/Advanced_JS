const order = {email:'abc@xyz.com'}
try{
 
    //Refrence Error
    //myFunction();
    //Type Error
//eval('Hello sdfsfsdag')
if(!order.name)
throw new SyntaxError('Order has no name')
console.log(order.name);
}catch(e){
    console.log(e.meassage)
    console.log(e.name)
    console.log(e instanceof ReferenceError)
}
finally{
    console.log('Inside finally');
}
//console.log('hello')