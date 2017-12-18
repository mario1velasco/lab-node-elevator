const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let person1 = new Person("Luis",1,7);
let person2 = new Person("Mario",2,5);
let person3 = new Person("Pedro",2,5);
let person4 = new Person("Carlos",3,7);
let person5 = new Person("Juan",4,1);
let person6 = new Person("Juan",8,5);

// elevator.log();
elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
elevator.call(person4);
elevator.call(person5);
elevator.call(person6);
elevator.start();
