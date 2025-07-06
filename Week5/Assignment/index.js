const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connectDB = async () => {
    await mongoose.connect('mongodb-url')
        .then(() => console.log("db connected"));
}

connectDB();

app.use(express.json());


const alienRoutes = require('./routes/aliens');
app.use('/aliens', alienRoutes);

app.get("/", (req, res) => {
    res.send("API WORKING....");
})

app.listen(9000, () => {
    console.log("Server Started....!! \nhttp://localhost:9000/");
});