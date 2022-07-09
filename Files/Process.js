
let quesons = ["what is your name?", "what is your hobby", "what is your prefered Programing languge"]
let answers = [];
const ask = (index) => {
    process.stdout.write(`\n\n\n\n ${quesons[index]}`);
    process.stdout.write("  >  ");
}
process.stdin.on('data', (data) => {
    // process.stdout.write(`\n ${data.toString().trim()} \n`);
    answers.push(data.toString().trim());
    if (answers.length < quesons.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});
ask(0);


process.on('beforeExit', () => {
    console.log("code");
});

