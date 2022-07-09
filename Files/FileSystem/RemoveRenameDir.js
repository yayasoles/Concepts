const fs=require("fs");

// fs.renameSync("./Sayings/sub",'./sub');
// console.log("moved Successfully");

// fs.rmdirSync("./Sayings/delete");
// console.log("Success");
fs.readdirSync("./Sayings").forEach((current)=>{
fs.unlinkSync("./Sayings/"+current);
})
fs.rmdirSync("./Sayings");
console.log("Success");


