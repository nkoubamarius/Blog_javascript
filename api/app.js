const express=require("express");
const posts=require('./data.json');
const Post=require("./models/posts");
const postData=new Post();
const app=express();

app.get("/api/posts", (req,res)=>{
    res.status(200).send(postData.get());
});

app.listen(3000, ()=>console.log("listening on http://localhost:3000"));