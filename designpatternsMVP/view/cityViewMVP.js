import Model from "../model/cityMVP";
import Controller from "../presentor/cityCtrlMVP";

class View{
    //dom elements and will represent everything - button, dopdown
    constructor(elements){
        this.elements = elements;
        
    }      
}

export default new View({addBtn:
    document.querySelector('#addBtn'),
    removeBtn:
    document.querySelector('#removeBtn'),
    cityList:
    document.querySelector('#cityList')
});