const express = require('express');
const userModel = require ('../Models/userModel');

// All users
const allUser =async (req, res) => {
  try {
    const Users = await userModel.find()
    res.json(Users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false, message:"User does not exists"})
        }

        if (password != user.password){
            return res.json({success: false, message: "Invalid Credentials"});
        }

        res.json({success:true});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}



// register user
const registerUser = async (req, res) => {

    const {name, password, email} = req.body;

    try {
        // checking if the user already exists
        const exists = await userModel.findOne({email});

        if(exists) {
            return res.json({success:false, message:"User already exists"});
        }

        const newUser = new userModel({
            name:name,
            email:email,
            password:password,
        });

        const user = await newUser.save();
        res.json({success:true});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
        res.json({ message: 'User deleted successfully', data: deletedUser });
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
}



const userRouter = express.Router()


userRouter.get('/', allUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;