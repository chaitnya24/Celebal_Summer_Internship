const express = require("express");

const app = express();

let name = 'Chaitanya';
let password = 1234567;

app.get('/', (req,res) => {
    res.send('This is the login page');
});

app.use(loginMiddleware);

app.get('/profile', (req,res) => {
    res.send('Profile Page');
})

app.get('/feed', (req,res) => {
    res.send('Feed Page');
})

app.listen(8000, () => {
    console.log("Server Running");
});

function loginMiddleware(req, res, next){
    if(name == 'Chaitanya' && password == 1234567){
        next();
    }else{
        res.send('Cannot authenticate the User');
    }
}