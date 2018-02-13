//require js which uses AMD
//const iife = require('./moduleA/testmodA');
//ES 2015 WAY OF importing modules

import iife from './moduleA/testmodA'

console.log(iife.methodA().getDay());
console.log(iife.methodB().getMonth());