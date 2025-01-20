//Create web server
var express = require('express');
var app = express();

//Create a comments array
var comments = [
    "This is a comment",
    "This is another comment",
    "This is a third comment"
];

//Create a route for the comments
app.get('/comments', function(req, res) {
    res.send(comments);
});

//Start the server
app.listen(3000);

