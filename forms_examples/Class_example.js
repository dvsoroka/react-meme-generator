// const createPerson = (name, age, gender) => {

//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// };

const createPerson = (name, age, gender) => ({name, age, gender})

console.log(createPerson("Zodiac Hasbro", 56, "male"));



const bicycle = {
    gear: 2,
//  setGear: function(newGear) {
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);

console.log(bicycle.gear);
console.log(bicycle);

/* Use class Syntax to Define a Constructor Function

ES6 provides a syntax to create objects using the "class" keyword
*/ 

var SpaceShuttle = function(targetPlanet, numberOfEngines) {             // Here is the older way to create an object.
  this.targetPlanet = targetPlanet;                     //  It's with the "new" keyword
  this.numberOfEngines = numberOfEngines;
  this.range = 900 * this.numberOfEngines;
  this.color = this.numberOfEngines > 2 ? this.numberOfEngines > 3 ? "red" : "yellow" :"green";
}

var zeus = new SpaceShuttle('Jupiter');                 // We can instantiate an object using "new" keyword. And we're instantiating the SpaceShuttle object.
                                                        // We have to have this constructor function (var SpaceShuttle = function(targetPlanet) {...} up here
                                                        // So, we use this to construct the object where we pass in the target planet, 'Jupiter'.
                                                        // And we said the targetPlanet of this.targetPlanet (this.targetPlanet = targetPlanet;)
                                                        // Once  we create the new object like this, that allows us to do zeus.targetPlanet.
                                                        // So, zeus.targetPlanet which we set to Jupiter
console.log(zeus.targetPlanet, zeus.color)

let mars = new SpaceShuttle('Mars', 2);
let moon = new SpaceShuttle('Moon', 3);
console.log(mars.color);
console.log(moon);

const saturn = new SpaceShuttle('Saturn', 4)
console.log (saturn.color)

/* The "class" syntax replaces the constructor function creation. */

class SpaceShip {       
    constructor(targetPlanet, numberOfEngines) {            //and inside the curly braces we have a constructor
        this.targetPlanet = targetPlanet;                    
        this.numberOfEngines = numberOfEngines;
        this.range = 900 * this.numberOfEngines;
        this.color = this.numberOfEngines > 2 ? this.numberOfEngines > 3 ? "red" : "yellow" :"green";
    }
}       

// And this works exactly the same as before. We're using the "class" keyword and this constructor.

const pluto = new SpaceShip('Pluto', 5);
console.log(pluto)

// Downhere we're going to do the same thing for a Vegetable class.

function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
      this.color = "orange";
      this.maxWeight = 0.5; 
    }
  }
    return Vegetable
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot)

/* 
    Use getters and setters to Control Access to an Object 

With the "class" object you often want to obtain values from the object and set a value of a property within an object.
These are often called getters and setters.
    In this class object, we have the constructor; we also have a getter and setter to get and set the writer. 
Getter functions are meant to simply return or get the value of an object's private variable to the user
*/
class Book {                
    constructor(author){
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const WhiteFang = new Book;
WhiteFang.writer = "Jack London";
//console.log(WhiteFang);
WhiteFang.get;
