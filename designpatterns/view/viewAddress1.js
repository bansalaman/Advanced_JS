import Model from "../model/modelAddress1"
import Controller from "../controller/controllerAddress1"
export default class View{
    constructor(elements){
        this.elements = elements;
        this.model = Model;
        this.controller = new Controller();
    }

    initialize(){
        this.elements.checkbox.addEventListener('change',()=>{
            this.elements.shipStName.value = this.elements.payStName.value;
            this.elements.shipCtName.value = this.elements.payCtName.value;
            this.controller.add(this.elements.shipStName.value,this.elements.shipCtName.value)
        })
    }
}