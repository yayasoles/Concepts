const Persons=require("./lib/Export");
// Persons.prototype = event.prototype;
let yaregal1 = new Persons("Yaregal Tadesse");
let Feven=new Persons("Feven")
// console.log(yaregal1.name);

// let Person = function(name){
//     this.name = name;
// }
// util.inherits(Person, EventEmitter);
// let yaregal = new Person("Yaregal");
yaregal1.on('speak', function(m) {
    console.log(`${this.name} : ${m}`);
});
Feven.on("speak",function(mesage,status){
console.log(`${this.name} -> ${mesage}`);
})

yaregal1.emit('speak','you may delay, but time will not.');
Feven.emit("speak","its far better to be alone, than to be in abd company");
// the event emitter is capable of trigeering or emiting custom events
// eventEmitter.emit('customEvent',"Hello Event",200);