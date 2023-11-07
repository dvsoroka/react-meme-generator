import { capitalizeString } from "./string_function.js";
// If I import everything * from a file I have to create an object  to store everything in.
import * as  capitalize from "./string_function.js";  // and now I'm creating object "capitalize" with this.

// Create an Export fallback with "export default" 
// It is often used if you only want to export one thing from a file.
// So we are going import from file math_functions.js that has a default export name "subtract".
// If it's not a default export, you'll put a curly braces around this name "subtract", but it is a default export so 
// we are not going to use curly braces. 
import subtract  from "./math_functions.js";
const differnce = subtract(7, 4);

console.log(`this is output from the "subtract" function which was imported 
using "import subtract  from "./math_functions.js";" from "export default" fallback 
 Difference: `, differnce);
// const cap = capitalizeFirstLetter("hello!");
// console.log(cap);
console.log(capitalize.capitalizeFirstLetter("hello!"));

console.log(capitalize.capitalizeString("hello from object \"capitalize\"!"))

console.log(capitalizeString("hello from \"capitalizeString\" imported as a single function using \"import { capitalizeString } \"!"))
