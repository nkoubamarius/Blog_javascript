const express=require("express");
const Post=require("./models/posts");
var cors = require('cors');
const postData=new Post();
const app=express();

// app.use(cors());

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/uploads', express.static('uploads'));

app.get("/api/posts", (req,res)=>{
    res.status(200).send(postData.get());
});

app.get("/api/posts/:post_id",(req, res)=>{
    let post_id=req.params.post_id;
    const foundPost=postData.getIndividualBlog(post_id);
    if(foundPost){
        res.status(200).send(foundPost);
    }else{
        res.status(404).send("Not found");
    }

});

app.listen(3000, ()=>console.log("listening on http://localhost:3000"));