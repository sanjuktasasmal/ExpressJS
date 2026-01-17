let express = require("express");
app = express();
app.get("/", (req,res)=>{
    res.send("this is json response..");
});
app.get("/four", function(req , res){
    let jsonArray=[
        {
            name:"sanjukta",
            city:"egra",
            occupation:"enginerring"
        },
        {
            name:"nilima",
            city:"mohanpur",
            occupation:"doctor"

        }
    ]
    res.json(jsonArray);
});

app.listen(3000,function(){
    console.log("server is running...");
}); 