const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');

app.use(express.json());

//Routes
fs.readdirSync('./routes').map(r=>{app.use('/api',require("./routes/"+r))});

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
});

