// 1. create new file   2.   write textual binary content to those  files  3.append texual binary content to existing file
const fs=require("fs");

//  the content to be added 
const content=`
samples markdown title
========================

sample subtitle
----------------------------

*point
*point
*point

`;

fs.writeFile("sample.md",content.trim(),(err)=>{
if(!err){
    console.log("File Created");
}
});