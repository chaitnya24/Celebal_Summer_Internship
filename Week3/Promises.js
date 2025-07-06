// Basic Understanding of Promises

let P = new Promise((resolve, reject)=>{
    let a = 1+1
    if (a == 2){
        resolve('Success');
    }else{
        reject('Failed');
    }
})

P.then((message) => {
    console.log('This is in the then: ' + message);
}).catch((message) => {
    console.log("this is inside the catch: " + message);
})


const recordVideoOne = new Promise ((resolve, reject) => {
    resolve("Video 1 record");
})

const recordVideoTwo = new Promise ((resolve, reject) => {
    resolve("Video 2 record");
})

const recordVideoThree = new Promise ((resolve, reject) => {
    resolve("Video 3 record");
})

Promise.race([recordVideoOne,
              recordVideoTwo,
              recordVideoThree])
.then((message) => {
    console.log(message)
})