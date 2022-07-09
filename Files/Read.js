const fs = require("fs");
const path = require("path");
// fs.readFile("./List.js", "UTF-8", (error, content) => {
//     if (error) {
//         console.log(err)
//     } else {
//         console.log(content);
//     }
// });
// let content=fs.readFileSync("./List.js","UTF-8");
// console.log(content);

// read both directory and file 

fs.readdir("./childProcess", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach((currentFileName) => {
            var filePath = path.join(__dirname, "childProcess", currentFileName);
            var fileStatistics = fs.statSync(filePath);
            if (fileStatistics.isFile() && currentFileName !== ".DS_Store") {
                fs.readFile(filePath, "UTF-8", (err, content) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(content);
                    }
                })
            }
        })
    }
});