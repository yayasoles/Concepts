const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const realPerson = {
    name: "",
    sayings: []
};

rl.question(" what is the name of a real person? ", (answer) => {

    realPerson.name = answer;
    rl.setPrompt(` what would ${realPerson.name} say?`);
    rl.prompt();
    rl.on("line", (saying) => {

        if (saying.toLowerCase().trim() !== "exit") {
            realPerson.sayings.push(saying.trim());
            console.log(saying);
            rl.setPrompt(` what else would ${realPerson.name} say?`);
            rl.prompt();
             
        } else {
            // process.exit();
            rl.close(); 
        }

    });
});
rl.on('close', () => {
    console.log("%s is a real Person %j", realPerson.name, realPerson.sayings);
    process.exit();
});