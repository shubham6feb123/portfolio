const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const fs = require('fs');

dotenv.config();
app.use(cors());
app.use(express.json());

//Routes
fs.readdirSync('./routes').map(r=>{app.use('/api',require("./routes/"+r))});

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
});

