//require js which uses AMD
//const iife = require('./moduleA/testmodA');
//ES 2015 WAY OF importing modules

//import iife from './moduleA/testModA'
import iife from './moduleA/testmodAEs2015.js'
console.log(iife.methodA().getDay());
console.log(iife.methodB().getMonth());