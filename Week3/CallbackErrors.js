// Error Hanbling in callbacks
function firstTask(callback){
    const randomNumber = Math.floor(Math.random()*10);
    if(randomNumber == 1){
        callback(new Error("Error executing the first task !"));
    }else{
        setTimeout(function(){
            console.log("First task");
            callback(null);
        },700);
    }
}

function secondTask(callback){
    const randomNumber = Math.floor(Math.random()*10);
    if(randomNumber == 1){
        callback(new Error("Error executing the Second task !"));
    }else{
        setTimeout(function(){
            console.log("Second task");
            callback(null);
        },1500);
    }
}

function thirdTask(callback){
    const randomNumber = Math.floor(Math.random()*10);
    if(randomNumber == 1){
        callback(new Error("Error executing the third task !"));
    }else{
        setTimeout(function(){
            console.log("Third task");
            console.log("Task three completed successfully");
        },500);
    }
}

firstTask(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Task one completed successfully");
    }
    secondTask(function(error){
        if(error){
            console.log(error);
        }else{
            console.log("Task two completed successfully");
        }
    thirdTask();
    });
});