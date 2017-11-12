/*
 Using Express
 Filename: index.js
 Date: 11/12/17
 Landon Rice
 */

var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var url = require('url');

app.get('/:id?', function(req, res) {
    if (req.params.id === "index.html") {
        res.sendFile(path.join(__dirname + "/index.html"));
        console.log(req.params.id);
    } else if (req.params.id === "about.html") {
        res.sendFile(path.join(__dirname + "/about.html"));
        console.log(req.params.id);
    } else {
        res.sendFile(path.join(__dirname + "/index.html"));
        console.log("Default page");
    }
});
app.listen(3000);
console.log("Server Running");