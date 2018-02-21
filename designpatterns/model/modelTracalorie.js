import Observer from '../observer/observerTracalorie'
class Model{
    constructor(){
        let count=0;
        ++count;
        console.log(count)
        this.meals;
        this.calories;
        this.totalCalor=0;
        this.itemAdded = new Observer();
        this.itemRemoved = new Observer();
        this.itemCleared = new Observer();
        this.itemUpdated = new Observer();
    }
    add(mealName,NoOfCalories){
        this.meals = mealName;
        this.calories = NoOfCalories;
        this.totalCalor+=parseInt(this.calories);
        this.itemAdded.notify(this.meals,this.calories,this.totalCalor);
    }
    delete(mealName,NoOfCalories){
        this.meals = mealName;
        this.calories = NoOfCalories;  
        this.itemRemoved.notify(this.meals,this.calories,this.totalCalor);
    }
    clear(mealName,NoOfCalories,totalCalor){
        this.totalCalor = 0;
        this.itemCleared.notify(mealName,NoOfCalories,this.totalCalor);
    }
    update(mealName,NoOfCalories){
        this.meals = mealName;
        this.calories = NoOfCalories;
        this.totalCalor -= parseInt(this.calories);
        this.itemUpdated.notify(this.meals,this.calories,this.totalCalor);
    }
}

export default new Model()