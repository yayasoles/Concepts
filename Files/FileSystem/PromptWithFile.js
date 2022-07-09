const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface(process.stdin, process.stdout);
const realPerson = {
    name: "",
    sayings: []
};

rl.question(" what is the name of a real person? ", (answer) => {
    //    create  a  new markdown file and use it
    

    // fs.writeFileSync(realPerson.name+" Sayings.md",`${realPerson.name}\n=========================\n\n`);
    realPerson.name = answer;
    const stream = fs.createWriteStream(realPerson.name + " Sayings.md");
    stream.write(`${realPerson.name}\n=========================\n\n`);
    rl.setPrompt(` what would ${realPerson.name} say?`);
    rl.prompt();
    rl.on("line", (saying) => {
        //   append the Saying to the persons File

        if (saying.toLowerCase().trim() !== "exit") {
            // writing using stream
            stream.write(`* ${saying.trim()}\n`);

            // fs.appendFileSync(realPerson.name+" Sayings.md",`* ${saying.trim()}\n`);
            realPerson.sayings.push(saying.trim());
            console.log(saying);
            rl.setPrompt(` what else would ${realPerson.name} say?`);
            rl.prompt();

        } else {
            stream.close();
            process.exit();
            // rl.close();
        }

    });
});
rl.on('close', () => {
    console.log("%s is a real Person %j", realPerson.name, realPerson.sayings);
    process.exit();
});