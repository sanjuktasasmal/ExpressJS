const express = require("express");
const app = express();

const userRouter = require("./usersroute");
app.use("/api/user", userRouter);

app.get("/", function(req,res){
    res.send("<h1>this is HOME section and GET request </h1>");
});

app.use((req,res)=>{
    res.send("<h1>404 !!! page not Found </h1>");
});

app.listen(3000, function(){
    console.log("server is running...");
});

module.exports = app;