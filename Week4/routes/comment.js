const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send({data : "Here is Your comments Data"});
});

router.post('/',(req,res) => {
    res.send({data : "Comment Created"});
});

router.put('/',(req,res) => {
    res.send({data : "Comment Updated"});
});

router.delete('/',(req,res) => {
    res.send({data : "Comment Delete :("});
});

module.exports = router;