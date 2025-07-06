const userLeft = true;
const userWachingCatMemes = true;

// Using Callbacks
function watchLMScallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: "User Left",
            message: ":("
        });
    } else if(userWachingCatMemes){
        errorCallback({
            name: "User is watching Cat Memes",
            message: "CelebalLMS << Cats"
        });
    } else {
        callback("Thumbs up and Learn");
    }
}

watchLMScallback(
    (message) => {
        console.log("Callback Success: " + message);
    },
    (error) => {
        console.log("Callback Error: " + error.name + " " + error.message);
    }
);


// Using Promises
function watchLMSPromises(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: "User Left",
                message: ":("
            });
        } else if(userWachingCatMemes){
            reject({
                name: "User is watching Cat Memes",
                message: "CelebalLMS << Cats"
            });
        } else {
            resolve("Thumbs up and Learn");
        }
    });
}

watchLMSPromises()
    .then((message) => {
        console.log("Promise Success: " + message);
    })
    .catch((error) => {
        console.log("Promise Error: " + error.name + " " + error.message);
    });


// Using Async/Await
async function watchLMSAsync() {
    try {
        const message = await watchLMSPromises();
        console.log("Async/Await Success: " + message);
    } catch (error) {
        console.log("Async/Await Error: " + error.name + " " + error.message);
    }
}

watchLMSAsync();
