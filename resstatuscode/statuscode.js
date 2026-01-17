let express = require('express');
app = express();
app.get("/", function(req,res){
    res.send("this is page");
});
app.get("/three", function(req,res){
    res.status(400).end("unauth")
});
app.listen(8000, function(){
    console.log("server is running...");
});