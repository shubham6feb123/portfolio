const app  = require('express')();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

app.get('/',(req,res)=>{
    res.send('nmaste duniya');
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
});

