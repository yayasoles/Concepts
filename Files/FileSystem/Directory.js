const fs = require("fs");
const path = require("path");
console.log(fs.statSync(path.join(__dirname, "List.js")));

if (fs.existsSync("Sayings")) {
    fs.rmdir("Sayings", (err) => {
        err ?   console.log(err) :console.log("Deleted");
    });
    fs.mkdir("Sayings", (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("directory create Successfully")
        }

    });
} else {
    console.log("User already exists.!");
}

