const express  = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const fs = require('fs');
const connectToMongodb = require('./database');
dotenv.config({path:'./config.env'});

//mongoDb connection
connectToMongodb();

//cors options
// const corsOptions = {
//     origin: 'https://5000-salmon-marmoset-khsapgrk.ws-us15.gitpod.io',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

//express middlewares
app.use(cors());
app.use(express.json());

//Routes
fs.readdirSync('./routes').map(r=>{app.use('/api',require("./routes/"+r))});

app.listen(process.env.PORT,()=>{
    console.log("server is listening on port 5000");
});

