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
            this.render(meal,calorie,totalCalor);
        })
        this.elements.addMeal.addEventListener('click',()=>{
            if(this.elements.mealInput.value !== "" && this.elements.calorieInput.value !== ""){
                this.totalCalor = this.elements.calorieInput.value;             
                this.controller.add(this.elements.mealInput.value,this.elements.calorieInput.value,this.totalCalor)
            }            
        })
        // this.elements.RemoveMeal.addEventListener('click',(e)=>{
        //     if(e.currentTarget){
        //         this.controller.remove(this.elements.mealInput.value,this.elements.calorieInput.value,this.totalCalor)
        //     }            
        // })
        this.elements.clearAll.addEventListener('click',()=>{
            this.totalCalor = 0;            
            this.elements.mealInput.value = '';
            this.elements.calorieInput.value = '';
            this.controller.add(this.elements.mealInput.value,this.elements.calorieInput.value,this.totalCalor)
            this.elements.tableData1.setAttribute("style","display:none");
            this.elements.totalCalories1.placeholder='';
        })        
    }
    render(meals,calories,totalCalorie){
        console.log(totalCalorie);
        var trow = document.createElement('tr'),
        tableData = document.getElementById('addTable'),
        tdata1 = document.createElement('td'),
        tdata2 = document.createElement('td'),
        tdata3 = document.createElement('td'),
        edit = document.createElement('button'),
        totalCalories= document.getElementById('total-calories');
        totalCalories.placeholder = totalCalorie;
        edit.innerHTML = "Edit"
        tableData.setAttribute("style","display:true")
        tdata1.innerHTML = meals + ":";
        tdata1.setAttribute("style","float:left")
        tdata2.innerHTML = calories;
        tdata2.setAttribute("style","float:left")
        edit.setAttribute("style","float:right right:10%")
        tdata3.appendChild(edit);
        trow.appendChild(tdata1);
        trow.appendChild(tdata2);
        trow.appendChild(tdata3);
        tableData.appendChild(trow);
        this.elements.mealInput.value = '';
        this.elements.calorieInput.value = '';
        }   
    }
