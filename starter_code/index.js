const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let person1 = new Person("Mario",2,5);
let person2 = new Person("Pedro",2,5);
let person3 = new Person("Luis",1,7);
let person4 = new Person("Juan",8,5);
let person5 = new Person("Carlos",3,7);

elevator.call(person1);
elevator._passengersEnter(person1);
elevator.call(person2);
elevator._passengersEnter(person2);
elevator.call(person3);
elevator._passengersEnter(person3);
elevator.call(person4);
elevator._passengersEnter(person4);
elevator.call(person5);
elevator._passengersEnter(person5);
