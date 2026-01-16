let express = require("express");
app = express();
app.get("/", function(req,res){
    res.send("hello this is express js ");
});
app.listen(3000, function(){
    console.log("server is running");
})