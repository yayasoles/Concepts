let wait =3000;
let currentTime=0;
let waitInterval=500;
percentWaited=0;
console.log("Wait for it");
const writeWaitingPercente=(p)=>{
process.stdout.clearLine();
process.stdout.cursorTo(0);
process.stdout.write(`waiting ... ${p} %`);  
}
const timer=()=>{
    currentTime +=waitInterval;
    percentWaited=Math.floor((currentTime/wait)*100);
    writeWaitingPercente(percentWaited);
}
const myTimer =setInterval(()=>{
    timer();
},waitInterval)
setTimeout(()=>{
    clearInterval(myTimer);
    writeWaitingPercente(100);
    console.log("Done");
},wait);
process.stdout.write("\n\n");
writeWaitingPercente(percentWaited);
