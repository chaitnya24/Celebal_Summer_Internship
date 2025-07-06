const fs = require('fs');

// fs.writeFile('data.txt', 'Written by Node.ls',(err) => {
//     if(err){
//         throw new Error(err);
//     }
//     console.log("File was written successfully");
//     fs.readFile('data.txt','utf8',(err,data) => {
//         if(err){
//             throw new Error(err);
//         }
//         console.log(data);
//     });
// });

// Better Method

try{
    fs.writeFileSync('data.txt','Created in Node.js' );
    console.log('File was Written successfully');
}catch(e){
    console.log(e);
}

try{
    const data = fs.readFile('data.txt', 'utf8');
    console.log(data);
}catch(e){
    console.log(e);
}