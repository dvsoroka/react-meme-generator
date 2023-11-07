import { capitalizeString } from "./string_function.js";


const cap = capitalizeString("hello!");
console.log(cap);

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

// Here is the older way to create an object, It's with the "new" keyword:

var SpaceShuttle = function(targetPlanet, numberOfEngines) {            //We have to have this constructor function, so we use "this" to construct the object   
  this.targetPlanet = targetPlanet;                     //  Where we pass in the targetPlanet and And we said the targetPlanet of this.targetPlanet
  this.numberOfEngines = numberOfEngines;
  this.range = 900 * this.numberOfEngines;
  this.color = this.numberOfEngines > 2 ? this.numberOfEngines > 3 ? "red" : "yellow" :"green";
}

var zeus = new SpaceShuttle('Jupiter');                 // We can instantiate an object using "new" keyword. And we're instantiating the SpaceShuttle object.
                                                        // We have to have this constructor function (var SpaceShuttle = function(targetPlanet) {...} up here
                                                        // So, we use this to construct the object where we pass in the target planet, 'Jupiter'.
                                                        // Once  we create the new object like this, that allows us to do zeus.targetPlanet.
                                                        // So, zeus.targetPlanet which we set to Jupiter
console.log(zeus.targetPlanet, zeus.color)


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

function makeClass1() {
  class Vegetable {
    constructor(name){
      this.name = name;
      this.color = "orange";
      this.maxWeight = 0.5; 
    }
  }
    return Vegetable
}
const Vegetable = makeClass1();
const carrot = new Vegetable('carrot');
console.log(carrot)

/* 
    Use getters and setters to Control Access to an Object 

With the "class" object you often want to obtain values from the object and set a value of a property within an object.
These are often called getters and setters.
    In this class object, we have the constructor; we also have a getter and setter to get and set the writer. 
Getter functions are meant to simply return or get the value of an object's private variable to the user without the user directly
accessing the private variable. 
*/
class Book {                
    constructor(author){
        this._author = author;  // The private variable is this "_author" that gets set when you construct the object. 
    }
    // getter
    get writer() {              // And then when we do "get writer()" it's going to return this._author. So you never actually interact 
        return this._author;    // directly with this variable but it's going to get the writer which is the _author 
    }
    // setter
    set writer(updatedAuthor) {         // And when you're setting, it's the same: you're never interacting with the _author, but 
        this._author = updatedAuthor;   // you can set that with the writer setter. This change could invoke calculations or even overriding the previous value completely.
    }                                   // So, you can have any number of code lines in this setter 
}

const WhiteFang = new Book;
WhiteFang.writer = "Jack London";
//console.log(WhiteFang);
WhiteFang.get;

// We're going to crate a Thermostat class and we're going to have a getter and setter.
// When we construct the class it's going to accept Farenheit temperaure, but we're going to crate getter ans setter 
// in the class to obtain the temperature in Celsius. So it's going to do the calculation right within the class.
// When you first create the Thermostat object you're going to pass in a temperature.
// Within this constructor we're going to set a private variable "_temp". 
// The word "this." means that this vatiable is only accessible within this class here.
// And the _temp - whenever you start a variable with an underscore "_" that's going to generally signify that it's 
// a private variable; that you're not supposed to access it outside of that scope or outside of that class.
function makeClass() {          
    class Thermostat {          
        constructor(temp) {         // So, we're going to set the _temp  And we're not going to just put this.temp = temp
            this._temp = 5/9 * (temp - 32);  // because it's passed in as a Farenheit and we want to convert it to Celsius. 
        }                                    
        get temperature() {                  
            return this._temp;      // it will return _temp in Celsius because we're storing the value in Celsius even       
        }                           // though the Thermostat is created in Farenheit.         
        set temperature(updatedTemp) {       
            this._temp = updatedTemp;    // And it's now going to still be in Celsius.    
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // When you're instantiating an object you always use the "new" keyword.
let temp = thermos.temperature;   // thermos.temperature is going to use the getter ( get temperature() ),  and it's going to return this._temp.
                                // A key thing to look at is that there are NO parenthesis after this "thermos.temperature" 
                                // so, generally, if something is a function, you would see parenthesis after the function name,
                                // but if it's a variable or a property name, it's going to not have parenthesis. 
                                // Getters and setters are accessed similar to properties 
console.log(temp);  

// Then we can use the setter here:                               
thermos.temperature = 26;       //and then it sets it with the (updatedTemp) nad now we can say:
temp = thermos.temperature;
console.log(temp); // it should have the new temperature if it load that: "26" 

