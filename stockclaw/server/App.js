const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require('express');
const app=express();
dotenv.config({path: './config.env'});
const port=process.env.PORT || 5000;

require("./db/conn"); 

app.use(express.json());
app.use(require('./router/auth'));
// const Data = require('./data/appdata');

// const path = require("path");
//     App.get("/",(req,res)=>{
    //         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    //     })
    //  App.get('/', (req,res) =>{
        //     console.log("hii i am there 0");
        //      res.send(`hellow from server side`);
        // } );
        
        // const middleware = (req,res,next) =>{
            //     next();
            // }
            
            
            
            
            
            // App.get("/Register",middleware,(req,res)=>{
                //     res.send("welcome to Register page");
                // })
               
                
app.listen(port, () =>{
    console.log(`server is runing on port no. ${port}`);
})