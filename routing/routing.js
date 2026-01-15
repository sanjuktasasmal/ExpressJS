
let express = require("express");

app = express();
app.get("/",function(req,res){
    res.send("home page");
});

app.get("/about", function(req,res){
    res.send("about page");
});

app.listen(3000,function(){
   console.log("server is running");
});