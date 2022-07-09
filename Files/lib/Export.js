// this is about Handling events with EventEmitter
// eventEmitter is part of the events module so create a variable for events and include the event
// const EventEmitter = require("events").EventEmitter;
const event = require("events");
// the eventEmitter itself is a constructor so create event variable with the eventEmitter constructor 
class Persons extends event {
    constructor(name) {
        super();
        this.name = name;
    }
}
//here we are exporting the Person to be imported later in the moduleEvents module
module.exports=Persons;