var express = require('express');
var router = express.Router();

//Home page route
router.get('/', function (req,res) {
    res.send(`Course Home Page`);
})

//About page route
router.get('/about', function (req,res) {
    res.send(`About This Course`);
})

module.exports = router;