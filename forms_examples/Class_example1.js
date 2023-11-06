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
console.log(WhiteFang);
WhiteFang.writer = "Mark Twain";
console.log(WhiteFang.writer);
WhiteFang.writer = "Jack London";
console.log(WhiteFang);


function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;   // thermos.temperature is going to use the getter ( get temperature() ),  and it's going to return this._temp.
console.log(temp);

thermos.temperature = 26;
 temp = thermos.temperature;
 console.log(temp);