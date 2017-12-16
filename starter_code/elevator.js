const Person = require('./person.js');
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "Up";
    this.waitingList = [];
    this.passengers = [];
  }
  start() {
    // var moveElevator = setInterval(this.update.bind(this), 1000);
    var moveElevator = setInterval(() => this.update(), 1000);
  }
  stop() {
    clearInterval(moveElevator);
  }
  update() {
    this.log();

  }
  _passengersEnter(person) {
    this.passengers.push(person);
    let index = this.waitingList.indexOf(person);
    if (index > -1)
      this.waitingList.splice(index, 1);
    this.requests.push(person.destinationFloor);
    console.log(`${person.name} has enter the elevator`);
  }
  _passengersLeave() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor === this.floor) {
        console.log(`${this.passengers[i].name} has left the elevator`);
        this.passengers.splice(i, 1);
        i--;
      }
    }
  }
  floorUp() {
    this.floor < 10 ?
      (this.floor++, this.direction = 'Up') :
      console.log("The elevator is in the last floor");
  }
  floorDown() {
    this.floor > 0 ?
      (this.floor--, this.direction = 'Down') :
      console.log("The elevator is in the first floor");
  }
  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}
module.exports = Elevator;
