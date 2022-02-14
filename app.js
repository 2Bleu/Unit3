// Load Express module
const express = require('express');

// Create an Express object
const app = express();
const port = 3000;

//Setup the Routes
var course = require("./course.js");
var student = require("./student.js");

// Setup the Get Route
app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.use('/course', course);
app.use('/student', student);

// list for request on port 3000
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

console.log('Hiya');