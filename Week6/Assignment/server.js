const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require ('./Routers/foodRouter.js');
const userRouter = require ('./Routers/userRouter.js');

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());

//db connection

const connectDB = async () => {
    await mongoose.connect('your-mongodb-website')
        .then(() => console.log("db connected"));
}

connectDB();

// api endpoints
app.use("/food", foodRouter);
app.use("/user", userRouter);


app.get("/", (req, res) => {
    res.send("API WORKING....");
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})
