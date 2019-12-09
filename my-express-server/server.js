//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("<h1>hello!<h1>");
});

app.get("/contact", function(request, response) {
  response.send("<h1>contact at sreemanth2001@gmail.com<h1>");
});

app.get("/about", function(request, response) {
  response.send("<h1>My name is sreemanth<h1>");
});

app.get("/hobbies", function(request, response) {
  response.send("<ul><li>sleep</li><li>eat</li><ul>");
});

app.listen(3000, function() {
console.log("Server has started on port 3000!");
});
