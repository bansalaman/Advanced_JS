let re;
//re = /nitro/;
//re=/nitro/i;
re = /nitro/ig;
console.log(typeof re)
console.log(re instanceof RegExp)
//RegExp is automatically a object
console.log(RegExp)
//console.log(re.source); //print nitro
//const result = re.exec('sapient nitro');
//const result = re.exec('bagmane nitro sapient nitro');
const result = re.exec('sapient');
console.log(result);
//console.log(result[0]);
//console.log(result.index);
//console.log(result.input);

//const result = re.test('sapient NITRO');
//console.log(result) //returns true or false

const str = 'sapient nitro';
//const result1 = str.match(re);
//console.log(result1); //print ['nitro']

const result1 = str.search(re);
console.log(result1); //print index i.e 8