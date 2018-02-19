import Observer from '../observer/observerTracalorie'
class Model{
    constructor(){
        this.meals;
        this.calories;
        this.totalCalor=0;
        this.itemAdded = new Observer();
        this.itemRemoved = new Observer();
    }
    add(mealName,NoOfCalories,totalCalor){
        this.meals = mealName;
        this.calories = NoOfCalories;
        this.totalCalor+=parseInt(totalCalor);
        this.itemAdded.notify(mealName,NoOfCalories,this.totalCalor);
    }
    remove(mealName,NoOfCalories,totalCalor){
        this.totalCalor-=parseInt(totalCalor);
        this.itemRemoved.notify(mealName,NoOfCalories,this.totalCalor);
    }
}

export default new Model()