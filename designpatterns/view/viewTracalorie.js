import Model from '../model/modelTracalorie'
import Controller from '../controller/controllerTracalorie'

export default class View{
    constructor(elements){
        this.elements = elements;
        this.model = Model;
        this.controller = new Controller();    
    }
    initialize(){
        this.model.itemAdded.attach((meal,calorie,totalCalor)=>{
            this.render(meal,calorie,totalCalor);
        })
        this.model.itemRemoved.attach((meal,calorie,totalCalor)=>{
            this.renderRemove(meal,calorie,totalCalor);
        })
        this.model.itemCleared.attach((meal,calorie,totalCalor)=>{
            this.render(meal,calorie,totalCalor);
            this.elements.tableData.innerHTML = ' ';
        })
        this.model.itemUpdated.attach((meal,calorie,totalCalor)=>{
            this.renderUpdate(meal,calorie,totalCalor);
        })
        this.elements.addMeal.addEventListener('click',()=>{
            if(this.elements.mealInput.value !== "" && this.elements.calorieInput.value !== ""){             
                this.controller.add(this.elements.mealInput.value,this.elements.calorieInput.value)
            }            
        })        
        this.elements.clearAll.addEventListener('click',()=>{
            this.elements.mealInput.value = ' ';
            this.elements.calorieInput.value = 0;
            this.controller.clear(this.elements.mealInput.value,this.elements.calorieInput.value);
        })
        this.elements.updateMeal.addEventListener('click',()=>{
            this.controller.add(this.elements.mealInput.value,this.elements.calorieInput.value)
        })
        this.elements.deleteMeal.addEventListener('click',()=>{
            this.controller.delete(this.elements.mealInput.value,this.elements.calorieInput.value)
        })                       
    }
    
    render(meals,calories,totalCalorie){
        var trow = document.createElement('tr'),
        tdata1 = document.createElement('td'),
        tdata2 = document.createElement('td'),
        tdata3 = document.createElement('td'),
        edit = document.createElement('button');        
        this.elements.totalCalories.placeholder = totalCalorie;
        edit.innerHTML = "Edit";
        edit.id='edit1';
        tdata1.innerHTML = meals + ":";
        tdata1.setAttribute("style","float:left")
        tdata2.innerHTML = calories;
        tdata2.setAttribute("style","float:left")
        edit.setAttribute("style","float:right")
        tdata3.appendChild(edit);
        trow.appendChild(tdata1);
        trow.appendChild(tdata2);
        trow.appendChild(tdata3);
        this.elements.tableData.appendChild(trow);
        this.elements.mealInput.value = '';
        this.elements.calorieInput.value = '';  
        edit.addEventListener('click',(e)=>{
            edit.parentElement.parentElement.remove();
            this.controller.update(meals,calories,totalCalorie);
            this.elements.updateMeal.style.display = "inline";
            this.elements.deleteMeal.style.display = "inline";
            this.elements.addMeal.style.display = "none";
        })       
    }
    renderUpdate(newMeal,newCalorie,newTotal){
        this.elements.mealInput.value = newMeal;
        this.elements.calorieInput.value = newCalorie;
    }
    renderRemove(newMeal,newCalorie,newTotal){
        this.elements.totalCalories.value = newTotal;
        this.elements.mealInput.value = "";
        this.elements.calorieInput.value = "";
    }  
}
