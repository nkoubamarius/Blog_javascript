const express=require("express");
const posts=require('./data.json');
const app=express();

const post=[{
    "id": "1581461442206",
    "title": "This is a New Blog Post",
    "content": "This is the content! ",
    "post_image": "uploads/post-image-1581461442199.jpg",
    "added_date": "1581461442206"
}];

app.get("/api/posts", (req,res)=>{
    res.status(200).send(posts);
});

app.listen(3000, ()=>console.log("listening on http://localhost:3000"));