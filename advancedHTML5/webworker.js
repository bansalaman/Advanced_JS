let i = 100;
let taskHandler = function(e){
    let intervalId = 0;
    let response = {"message":"","Root":0}
    //e is message event
    //main thread will wait for the message
    if(e.data === 'start'){
        try{
        intervalId = setInterval(()=>{
            response.Root = Math.sqrt(i)
            postMessage(JSON.stringify(response));
            i++;
        },10);
    }catch(e){
        clearInterval(intervalId);
        postMessage(e.message);
    }
    }
    else if(e.data === 'pause'){
        clearInterval(intervalId);
    }
}
addEventListener("message",taskHandler,false);
//event bubbling and event capturing

//main thread and worker thread
//func is execcuted in worker thread when messsage is passed