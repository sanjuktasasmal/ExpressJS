let express = require("express");
app = express();
app.get("/", function(req,res){
    res.send(" string response");
});
app.post("/two", function(req,res){
    res.send("this is simple string response")
});
app.listen(8000, function(){
    console.log("server is ruuning");
})