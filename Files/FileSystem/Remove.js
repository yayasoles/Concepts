const fs = require("fs");
try {
    fs.unlinkSync("./Sayings/Renamed.js");
    console.log("Deleted");
} catch (error) {
    console.log(error);
}
