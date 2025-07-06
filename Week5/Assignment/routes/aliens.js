const express = require('express');
const alien = require('../models/aliens');

const Router = express.Router();

Router.get('/', async (req, res) => {
    try {
        const aliens = await alien.find();
        res.json(aliens);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});


Router.get('/:id', async (req, res) => {
    try {
        const foundAlien = await alien.findById(req.params.id);
        if (!foundAlien) {
            return res.status(404).send('Alien not found');
        }
        res.json(foundAlien);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});


Router.post('/', async (req, res) => {
    const newAlien = new alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });

    try {
        const savedAlien = await newAlien.save();
        res.status(201).json(savedAlien);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});


Router.patch('/:id', async (req, res) => {
    try {
        const foundAlien = await alien.findById(req.params.id);
        if (!foundAlien) {
            return res.status(404).send('Alien not found');
        }

        if (req.body.sub !== undefined) {
            foundAlien.sub = req.body.sub;
        }
        if (req.body.name !== undefined) {
            foundAlien.name = req.body.name;
        }
        if (req.body.tech !== undefined) {
            foundAlien.tech = req.body.tech;
        }

        const updatedAlien = await foundAlien.save();
        res.json(updatedAlien);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});


Router.delete('/:id', async (req, res) => {
    try {
        const deletedAlien = await alien.findByIdAndDelete(req.params.id);
        if (!deletedAlien) {
            return res.status(404).send('Alien not found');
        }
        res.json({ message: 'Alien deleted successfully', data: deletedAlien });
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

module.exports = Router;
