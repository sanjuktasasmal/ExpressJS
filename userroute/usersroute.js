const express = require("express");
const router = express.Router();
router.get("/register", (req,res)=>{
    res.send("<h1>i am a get request at register router </h1>");
});
router.get("/login", (req,res)=>{
    res.send("<h1>i am a get request at login router </h1>");
});
module.exports= router;