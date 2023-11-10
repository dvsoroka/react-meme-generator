let name = 'Jack';
let gender = 'male';
let age = 20;

// ES5 syntax of object creation:

var personOld = {
    name: name,
    gender: gender,
    age: age,
    greet: function() {
        console.log(`Hello, my name is  ${this.name}`);
    }
}

console.log(personOld);

// ES6 syntax of object creation:
let person = {
    name,
    gender,
    age,
    greet() {
        console.log(`Hello, my name is  ${this.name}`);
    },

    get password() {
        
        return this.passwd ? this.passwd :  this.name + this.age;
    },

    set password(newValue) {
        this.passwd = newValue;
    }
}

console.log(person);