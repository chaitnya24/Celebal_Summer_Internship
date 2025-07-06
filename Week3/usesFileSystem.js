const fs = require("node:fs/promises");

// Using Promises
// fs.readFile("data.txt", "utf-8")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// Using Async Await
async function readfile(){
    try{
        const data = await fs.readFile("data.txt", "utf-8")
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

readfile();