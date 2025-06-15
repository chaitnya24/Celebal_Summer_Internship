
const userLeft = true
const userWachingCatMemes = true


// Using Callbacks

function watchLMScallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name:"User Left",
            message:":("
        })
    }else if(userWachingCatMemes){
        errorCallback({
            name:"User is watching Cat Memes",
            message:"CelebalLMS << Cats"
        })
    }else{
        callback("Thumbs up and Learn")
    }
}

watchLMScallback((message) => {
    console.log('Success: ' + message)
},(error)=> {
    console.log(error.name + " " + error.message);
})


// Using Promises

function watchLMSPromises(){
    return new Promise((resolve, reject) => {
        if(userLeft){
        reject({
            name:"User Left",
            message:":("
        })
    }else if(userWachingCatMemes){
        reject({
            name:"User is watching Cat Memes: ",
            message:"CelebalLMS << Cats"
        })
    }else{
        resolve("Thumbs up and Learn");
    }
    })
}

watchLMSPromises().then((message) => {
    console.log("success: " + message)
}).catch((error) => {
    console.log(error.name + " " + error.message)
})