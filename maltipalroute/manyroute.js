const express = require("express");
app = express();

// home route...
app.get("/", function(req, res){
    res.send("this is home route");
});

//one route..
app.get("/one", function(req, res){
    res.send("this is one section route..");
});
//two route..
app.get("/two", function(req, res){
    res.send("this is two section route");
});
//post 
// three route..
app.post("/three", function(req, res){
    res.send("this is three post requcst");
});

// app listen this port..
app.listen(3000, function(){
    console .log("server is running");
});
