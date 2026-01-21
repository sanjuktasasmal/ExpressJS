const express = require("express");
const app = express();

app.get("/", function(req,res){
     let firstName = req.query.firstName;
     let lastName = req.query.lastName;
     res.end(firstName+ " " + lastName);
});

app.listen(3000,function(){
    console.log("server is running");
});