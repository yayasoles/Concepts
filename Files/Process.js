let quesons=["what is your name?","what is your hobby", "what is your prefered Programing languge"]
let answers=[];
const ask=(index)=>{
    process.stdout.write(`\n\n\n\n ${quesons[index]}`);
    process.stdout.write("  >  ");
}
process.stdin.on('data',(data)=>{
    // process.stdout.write(`\n ${data.toString().trim()} \n`);
    answers.push(data.toString().trim());
    if(answers.length<quesons.length){
        ask(answers.length);
    }else{
        process.exit();
    }
})
process.on('beforeExit',()=>{
    process.stdout.write("you are exiting");
});
process.on('exit',()=>{
    process.stdout.write("\n\n\n\n");
process.stdout.write(` go ${answers[1]}  ${answers[0]}  you can finish writing ${answers[2]}`);
    process.stdout.write("\n\n\n\n");
})
ask(0);
