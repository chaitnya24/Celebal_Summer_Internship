// function print(callback){
//     callback();
// }

// example
setTimeout(() => {
console.log("This message is shown after 3 seconds");
}, 3000);

function firstTask(callback){
    setTimeout(function(){
        console.log("first Task");
        callback();
    }, 700)
}

function SecondTask(callback){
    setTimeout(function(){
        console.log("Second Task");
        callback();
    }, 1500)
}

function thirdTask(){
    setTimeout(function(){
        console.log("first Task");
    }, 500)
}

firstTask(function(){
    SecondTask(function(){
        thirdTask();
    });
});