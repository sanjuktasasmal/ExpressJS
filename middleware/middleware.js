const express = require("express");
app= express();
// route
app.get("/", function(req,res){
    res.send("this is home route");
});
// middleware..
app.use(function(req,res,next){
    console.log("i am middleware");
    next();
});
//listen port..
app.listen(3000, function(){
    console.log("server is running");
});
