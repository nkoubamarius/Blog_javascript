const fs=require('fs');
const PATH="./data.json";

class Post{

    get(){
        return this.readData();
    }

    getIndividualBlog(){

    }

    add(){

    }

    readData(){
        let rawdata=fs.readFileSync(PATH);
        let posts=JSON.parse(rawdata);
        return posts;
    }
}

module.exports=Post