const express = require('express');
const app = express();
const port = 8080;

app.get('/test',(req,res)=>{
    res.status(200).json({success:true,message:'docker node testing okay..SOMETHING! NEW....'})
})

app.listen(port,()=>{
    console.log(`your app is listening at ${port}`);
})