const fs=require('fs');
const PATH="./data.json";

class Post{

    get(){
        return this.readData();
    }

    getIndividualBlog(postid){
        const posts=this.readData();
        const foundPost=posts.find((post)=>post.id==postid);
        return foundPost;
    }

    add(newPost){
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData(){
        let rawdata=fs.readFileSync(PATH);
        let posts=JSON.parse(rawdata);
        return posts;
    }

    storeData(rawData){
        let data=JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports=Post