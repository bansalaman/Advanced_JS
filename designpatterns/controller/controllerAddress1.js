import Model from "../model/modelAddress1";
export default class Controller{
    constructor(){
        this.model = Model;
    }
    add(stName, cityName){
        this.model.add(stName, cityName);
    }
}