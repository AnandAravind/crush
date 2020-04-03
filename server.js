const express=require('express');
const path=require('path');
const app=express();
app.use(express.static('src'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/index.html'));
});

app.listen(5000,()=>{
   console.log("server is upon port 5000");
});