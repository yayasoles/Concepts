// this is about Handling events with EventEmitter
// eventEmitter is part of the events module so create a variable for events and include the event
// const EventEmitter = require("events").EventEmitter;
const event = require("events");
const util = require("util");
// the eventEmitter itself is a constructor so create event variable with the eventEmitter constructor 
class Persons extends event {
    constructor(name) {
        super();
        this.name = name;
    }
}
// Persons.prototype = event.prototype;
let yaregal1 = new Persons("Yaregal Tadesse");
// console.log(yaregal1.name);

// let Person = function(name){
//     this.name = name;
// }
// util.inherits(Person, EventEmitter);
// let yaregal = new Person("Yaregal");
yaregal1.on('speak', function(m) {
    console.log(`${this.name} : ${m}`);
});
yaregal1.emit('speak','you may delay, but time will not.');
// the event emitter is capable of trigeering or emiting custom events
// eventEmitter.emit('customEvent',"Hello Event",200);