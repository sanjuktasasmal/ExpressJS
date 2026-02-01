const express = require ("express");
const app = express();

app.get("/", function(req,res){
    res.send("this is get request");
});

app.get("/userId/:id", function(req,res){
   const id = req.params.id;
   res.send(`<h1>student id is : ${id}</h1>`);
});

app.listen(3000,()=>{
    console.log("server is runnig");
});
