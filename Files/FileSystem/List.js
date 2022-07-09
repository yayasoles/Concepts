const fs=require("fs");
let file=fs.readdir("./childProcess",(error,files)=>{
    if(error){
        throw err;
    }else{
        console.log(files);
    }
    
});
let files=fs.readdirSync("./childProcess");
console.log(files);