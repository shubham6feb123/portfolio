const express  = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const fs = require('fs');
const connectToMongodb = require('./database');
dotenv.config({path:'./config.env'});

//mongoDb connection
connectToMongodb();

//express middlewares
app.use(cors());
app.use(express.json());

//Routes
fs.readdirSync('./routes').map(r=>{app.use('/api',require("./routes/"+r))});

app.listen(process.env.PORT,()=>{
    console.log("server is listening on port 5000");
});

