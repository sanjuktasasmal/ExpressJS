var express = require("express");
var app = express();

app.use("/about",function(req,res,next){
    console.log("i am about middleware")
    next();
});
app.get("/about", function(req,res){
    res.send("this is about page");
});
app.listen(3000,function(){
    console.log("server is running");
});