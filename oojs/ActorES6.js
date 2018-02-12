
//we are declaring actor as a class
class Actor{

    constructor(age,height,name){
        this.age = age;
        this.height = height;
        this.name = name;
    }

    //instance methods
    dance(){
        console.log("aman");
        console.log("Actor "+this.name+" is dancing")
    }
    act(){
        console.log("Actor "+this.name+" is acting")
    }
}

let sharukhKhan = new Actor(52,173,"SharukhKhan");
sharukhKhan.dance();
sharukhKhan.act();