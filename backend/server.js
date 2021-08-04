const app  = require('express')();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');

//Routes
fs.readdirSync('./routes').map(r=>{app.use('/api',require("./routes/"+r))});

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
});

