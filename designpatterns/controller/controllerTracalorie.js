import Model from '../model/modelTracalorie'
export default class Controller{
    constructor(){
        this.model = Model;
    }
    add(mealName,NoOfCalories,totalCalor){
        this.model.add(mealName,NoOfCalories,totalCalor)
    }
    remove(mealName,NoOfCalories,totalCalor){
        this.model.remove(mealName,NoOfCalories,totalCalor)
    }
}