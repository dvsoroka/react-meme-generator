// class -> function 
// ab class - >  class -> object
// class User {
//     //username
//     //passwd
//     constructor (username, password) {
//         this.username = username;
//         this.password = password;
//     }
//     validatePassword () {
//         // > 6
        
//         if (this.password.length > 6 ) {
//             return true;
//         }  
//         return false;
//     }
// }


let a = 'Alex';
let b = '7778888';

const person = new User(a, b);
console.log(person);
console.log(person.validatePassword());


let firstStudent = new Student(a, b, 'I123');
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());


