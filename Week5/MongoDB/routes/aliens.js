const express = require('express');
const alien = require('../models/aliens');

const Router = express.Router()

Router.get('/', async(req, res) => {
    try{
        const aliens = await alien.find();
        res.json(aliens);
    }catch(err){
        res.send('Error' + err);
    }
})

Router.get('/:id', async(req, res) => {
    try{
        const aliens = await alien.findById(req.params.id);
        res.json(aliens);
    }catch(err){
        res.send('Error' + err);
    }
})

Router.patch('/:id', async(req, res) => {
    try{
        const aliens = await alien.findById(req.params.id);
        aliens.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send('Error' + err);
    }
})


module.exports = Router;