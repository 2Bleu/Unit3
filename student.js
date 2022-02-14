var express = require('express');
var router = express.Router();

//Home page route
router.get('/', function (req,res) {
    res.send(`Student Home Page`);
})

//About page route
router.get('/profile', function (req,res) {
    res.send(`Student Profile`);
})

module.exports = router;