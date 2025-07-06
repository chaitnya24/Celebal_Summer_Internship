import express from 'express';
import mongoose from 'mongoose';
import {loginUser, registerUser } from './routes/userRoutes.js';

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());

function isLoggedIn(req, res, next) {
  req.data.token ? next() : res.sendStatus(401);
}

//db connection

const connectDB = async () => {
    await mongoose.connect('mongodb-url')
        .then(() => console.log("db connected"));
}

connectDB();

// api endpoints

app.get('/home', isLoggedIn, (req, res) => {
  res.send(`Hello`);
});

app.post("/register", registerUser)
app.post("/login", loginUser)

app.get("/", (req, res) => {
    res.send("API WORKING....");
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})
