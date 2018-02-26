import Model from '../model/modelTracalorie'
export default class Controller{
    constructor(){
        this.model = Model;
    }
    add(mealName,NoOfCalories){
        this.model.add(mealName,NoOfCalories)        
    }
    delete(mealName,NoOfCalories){
        this.model.delete(mealName,NoOfCalories)
    }
    clear(mealName,NoOfCalories){
        this.model.clear(mealName,NoOfCalories)
    }
    update(mealName,NoOfCalories){
        this.model.update(mealName,NoOfCalories);
    }
}