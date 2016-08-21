var express=require('express');
var app=express();

var mongojs=require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyparser=require('body-parser');

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());




app.listen(3000, function () {

    console.log("server running");
});