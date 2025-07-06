const express = require('express');
const foodModel = require ('../Models/foodModel');

// add food item

const addFood = async (req, res) => {

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        shop: req.body.shop,
    })

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// all food list

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

//remove food item
const removeFood = async (req, res) => {
    const foodId = req.body.id;
    try {

        await foodModel.findByIdAndDelete(foodId);
        res.json({ success: true, message: "Food Removed" });

    } catch (error) {
        
        console.log(error);
        res.json({ success: false, message: "Error" });

    }
}

const foodRouter = express.Router();

foodRouter.post("/add", addFood);
foodRouter.get("/", listFood);
foodRouter.post("/remove", removeFood);

module.exports = foodRouter;