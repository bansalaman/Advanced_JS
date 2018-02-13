const {Customer,Order} = require('./moduleA/customer');

//let customer = new Customer(1,"Some Name");

console.log('Customer Details '+Customer);

let order = new Order(2,"Order1")
console.log('Order Details '+order);