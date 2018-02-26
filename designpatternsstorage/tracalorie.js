import Model from './model/modelTracalorie'
import View from './view/viewTracalorie'
import Controller from './controller/controllerTracalorie'
(function(){
    console.log("tracalorie.js");
    let view = new View({
        //debugger;
        clearAll : document.getElementById('clear-all'),
        addMeal : document.querySelector('#add-meal'),
        mealInput : document.getElementById('meal-input'),
        calorieInput: document.getElementById('calorie-input'),
        tableData: document.getElementById('addTable'),
        totalCalories: document.getElementById('total-calories'),
        updateMeal: document.getElementById('update-meal'),
        deleteMeal: document.getElementById('delete-meal')
    })
    let controller = new Controller();
    view.initialize();
})();