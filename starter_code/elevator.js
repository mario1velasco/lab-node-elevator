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
    console.log("There are not people waiting");
  }
  update() {
    this.log();
    this._passengersLeave();
    this._passengersEnter();
    console.log(`Floor: ${this.floor}  |  Request 0 = ${this.requests[0]}`);
    (this.floor > this.requests[0]) ? this.floorDown(): this.floorUp();
    if (this.requests.length === 0)
      stop();
  }

  _passengersEnter() {
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor === this.floor) {
        this.passengers.push(this.waitingList[i]);
        console.log(`${this.passengers[this.passengers.length-1].name} has enter the elevator`);
      }
    }
    console.log(this.waitingList[0]);
    for (let i = 0; i < this.waitingList.length; i++) {
      console.log("Wait Lis=" + this.waitingList[i].originFloor + "    floor" + this.floor);
      if (this.waitingList[i].originFloor === this.floor) {
        console.log("borrando");
        this.waitingList.splice(i, 1);
        // if (i != 0)
          i--;
      }
    }
    // this.passengers.push(person);
    // let index = this.waitingList.indexOf(person);
    // if (index > -1)
    //   this.waitingList.splice(index, 1);
    // this.requests.push(person.destinationFloor);
    // console.log(`${person.name} has enter the elevator`);
  }
  _passengersLeave() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor === this.floor) {
        console.log(`${this.passengers[i].name} has left the elevator`);
        this.passengers.splice(i, 1);
        i--;
      }
    }
    for (let i = 0; i < this.requests.length; i++) {
      if (this.requests[i].destinationFloor === this.floor) {
        this.requests.splice(i, 1);
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
    this.requests.push(person.destinationFloor);
    this.waitingList.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}
module.exports = Elevator;
