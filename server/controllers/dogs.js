const express = require('express');
const router = express.Router();

const Dog = require('../models/dog')

router.get('/', (req, res) => {
    const dogsData = Dog.all;
    res.send(dogsData);
});



module.exports = router