let express = require("express");
app =  express();

app.get("/banladesh", function(req,res){
    res.redirect("http://localhost:8000/india");
});

app.get("/india" , function(req, res){
    res.send("THIS IS INDIA");
});

app.listen(8000,function(){
    console.log("server is running");
});