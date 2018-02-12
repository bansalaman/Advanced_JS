let Order = function(orderId,orderName,orderStatus,orderDate){
    this.orderId = orderId;
    this.orderName = orderName;
    this.orderStatus = orderStatus;
    this.orderDate = orderDate;
    //this.array = array;
    
}

Order.prototype = {
    
    orderSort:function(){
        if(this.orderStatus == "Completed"){
            array.push(orderStatus);
        }
    
    },
    orderPrint:function(){
            for(let i in array){
                if(array[i] == this.orderStatus){
                    console.log(this.orderId+" "+this.orderName+" "+this.orderStatus+" "+this.orderDate);
                }
            
        }
    }
}

var array = [];
let Ordering = new Order(1234,"Phone","Completed",12022018);
let Ordering1 = new Order(1274,"Phone","Completed",12022018);
let Ordering2 = new Order(1284,"Phone","Completed",12022018);
array.push(Ordering);
array.push(Ordering1);
array.push(Ordering2);
//Ordering.orderSort(1234,"Phone","Completed",12022018);
//Ordering.orderPrint(1234,"Phone","Completed",12022018);
console.log(array);
