const saying=["you may delay, but time will not.",
"tell me and I forget. teach me and I remember. involve me and I will learn",
"early to bed and early to rise makes a man healthy, wealth and wise",
"tell me about your friends and I will tell you about you",
"a negative mind will never give you a posetive result",
"if you want it you will work for it if not you will find an excecuse",
"the only love that persistes is love of god",
"the begining of wisdom is fear of god",
"what I know is I know nothing"
]

let Interval=setInterval(()=>{
let i=Math.floor(Math.random()*saying.length);
process.stdout.write(saying[i]);
},1000);

process.stdin.on('data',(data)=>{
console.log(`STDIn data recived-> ${data.toString().trim()}`)
clearInterval(Interval);
process.exit();
});