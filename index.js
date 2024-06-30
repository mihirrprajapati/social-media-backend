const express = require("express");
const cors = require('cors');
const data = require("./data.json");

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/all", (req, res)=>{
    return res.json(data);
})

app.get("/currentuser", (req, res)=>{
    res.json({ userId: 103 });
})

app.listen(PORT, ()=>{
    console.log("Server Started");
})