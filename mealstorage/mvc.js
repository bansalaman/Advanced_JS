import View from "./view/cityView";

(function(){

    //let model = Model;
    let view = new View({addButton:document.querySelector('#addMeal'),
                        updateButton:document.querySelector('#updateMeal'),
                        deleteButton:document.querySelector('#deleteMeal'),
                        totalCalories:document.querySelector('#totalCalories'),
                        meal:document.querySelector('#meal'),
                        amount:document.querySelector('#amount'),
                        mainTable:document.querySelector('#mainTable'),
                        table:document.querySelector('#table'),
                        clearButton:document.querySelector('#clearButton')})

    //let controller = new Controller();
    view.initialize();

}())