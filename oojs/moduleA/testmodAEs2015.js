var MyApp = MyApp || {};
MyApp.sapient = {}
MyApp.sapient.nitro = {}
MyApp.sapient.nitro = (function(ns){
//export default (function(){
    'use strict';

    ns.methodA = function(){
    //let methodA = function(){
        return{
         getDay: function(){
                return new Date().getDay();
            }
        }
    }

    ns.methodB = function(){
    //let methodB = function(){
        return{
         getMonth: function(){
                return new Date().getMonth();
            }
        }
    }
    
    //closures to expose private members as public interfaces
    return ns;
    
    
//}());
}(MyApp.sapient.nitro || {}));

export default MyApp.sapient.nitro