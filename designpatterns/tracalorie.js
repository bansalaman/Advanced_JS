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
        showElements: document.getElementById('show-elements'),
        totalCalories1: document.getElementById('total-calories'),
        editButton : document.getElementById('edit'),
        tableData1 :document.getElementById('addTable')
    })
    let controller = new Controller();
    view.initialize();
})();