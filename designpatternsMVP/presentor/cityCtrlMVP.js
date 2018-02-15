import Model from "../model/cityMVP";
import View from '../view/cityViewMVP';

export default class Controller{
    constructor(){
        this.model =Model;
        this.view = View;
    }
    
    initialize(){
        this.model.cityAdded.attach((cityList)=>{
            //rerendering the dom by refreshing\
            //render is a local function
            this.render(cityList)
        })

        this.model.cityRemoved.attach((cityList)=>{
            this.render(cityList)
        })

        this.view.elements.addBtn.addEventListener('click',()=>{
            let newCity = prompt('Enter a New City');
            if(newCity){
                this.model.add(newCity)
            }
        })

        this.view.elements.removeBtn.addEventListener('click',()=>{
            let index = this.view.elements.cityList.options.selectedIndex;
            if(index!=-1){
                this.model.remove(index);
            }
        })
    }

   
    render(newCityList){
        this.view.elements.cityList.innerHTML = '';
        for(let city of newCityList){
            this.view.elements.cityList.appendChild
            //name,value
            (new Option(city,city))
        }
    }
   
}