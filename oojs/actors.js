//we are declaring actor as a class
let Actor = function(age,height,name){

        //instance variables
        this.age = age;
        this.height = height;
        this.name = name;

        //instance methods
        this.dance = function(){
            console.log("Actor "+this.name+" is dancing")
        }
        this.act = function(){
            console.log("Actor "+this.name+" is acting")
        }
}

let sharukhKhan = new Actor(52,173,"SharukhKhan");
sharukhKhan.act();
sharukhKhan.dance();