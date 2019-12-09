//jshint esversion: 6

const express = require("express");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator",function(req,res) {
  res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator", function(req,res){
var w = Number(req.body.weight);
var h = Number(req.body.height);
var resu = w/(h*h);

res.send("The BMI is "+ resu);
});

app.post("/",function(req,res) {
  // console.log(req.body);
 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);
 var result = num1+num2;

  res.send("The result is "+result);
});
app.listen("3000",function() {
  console.log("Welcome to the port 3000");
});
