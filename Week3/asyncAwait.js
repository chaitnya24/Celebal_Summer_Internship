function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log('Making Request to ' + location)
        if(location === 'Google'){
            resolve('Google says hi')
        }else{
            reject('We can only talk to Goggle')
        }
    })
}

function processRequest(response){
    return new Promise ((resolve, reject) => {
        console.log('Processing response')
        resolve('Extra Information ' + response)
    })
}

// Using Promises
// makeRequest('Google').then(response => {
//     console.log("Response Received")
//     return processRequest(response)
// }).then(processRequest => {
//     console.log(processRequest)
// }).catch(error => {
//     console.log(error)
// })

// Using AsyncAwait
async function doWork(){
    try{
        const response = await makeRequest("Google")
        console.log('Response Received')
        const processedRequest = await processRequest(response)
        console.log(processedRequest)
    }catch(err){
        console.log(err)
    }
}

doWork();