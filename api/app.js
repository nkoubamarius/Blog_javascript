const express=require("express");
const Post=require("./models/posts");
var cors = require('cors');
var multer=require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
    }
});

const getExt=(mineType)=>{
    switch(mineType){
        case "image/png":
            return ".png";
        case "image/jpeg":
            return ".jpeg";
    }
}
   
var upload = multer({ storage: storage });

const postData=new Post();
const app=express();

// app.use(cors());

app.use(express.json());

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

app.post('/api/posts',upload.single("post-image"),(req, res)=>{
    const newPost={
        "id": `${Date.now()}`,
        "title": req.body.title,
        "content": req.body.content,
        "post_image":req.file.path,
        "added-date":`${Date.now()}`
    }

    postData.add(newPost);
    res.status(201).send(newPost);
})

app.listen(3000, ()=>console.log("listening on http://localhost:3000"));