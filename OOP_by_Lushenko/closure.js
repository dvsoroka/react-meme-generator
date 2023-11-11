// https://www.youtube.com/watch?v=80O6L2Ez3GM

// closure =  A function with preserved data.
//            Give you access to an outer function's scope,
//            from an inner function.

//            State of variables in outer scope are "saved".
//            Variables in outer scope are consideres "private".

//let points = 0;

let score = function() {       // --- anything between these set of curly braces within our outer function is considered the lexical scope
    let points = 0;    // (*)  //   One way in which we can save the data stored within a function is to create a closure - we will 
    return function(){ // (**) // create an inner function we will return an anonomys function and within this inner function what do
        points += 1;   // (**) // we want to do is to take our points and increment it; 
        return points; // (**) // then we will return our ponts.
    }
//}  
}()                     // and then at the end we will invoke this function by adding a set of parentheses to the outer function.
                        // So we have now created a closure, so not only is the value saved within our "points" variable but we cannot
                        // access our "points" variable from outside of our function. It's effectively considered "private" and that
                        // adds a layer security to our program. 
                        // So a key thing to remember things on the inside (**) normally have access to things on the outside (*)
                        // anything between these set of curly braces within our outer function is considered the lexical scope, our inner
                        // function has access to this variable ( let points = 0;) or anything else between this set of curly braces that 
                        // is considered the lexical scope and we can save and preserve our "points" variable and NOT give anything outside 
                        // of this function access to that variable so that's kind of the point behind a closure it's a function with 
                        // preserved data; it gives you access to an outer function scope from an inner function the benefits is that the
                        // state of variables in the outer scope are saved and variables in the outer scope are also considered "private"
                        // you cannot normally access them from outside of the function.
//points = 100;
console.log(score());
console.log(score());
console.log(score());



// https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern#knowledge-check

function makeAdding(firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting(secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  }   
}

// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7


//  Functions in JavaScript form closures. A closure refers to the combination of a function and the surrounding state
// within which a function was declared in. This surrounding state, also called its lexical environment, consists of any local
// variables that were in scope at the time the closure was made. Here, add5 is a reference to the resulting function, created 
// when the makeAdding function is executed, thus it has access to the lexical environment of the resulting function, which 
// contains the first variable, making it available for use, rather than removing it from memory for being out of scope.


function makeCounter() {
  let number = 0;
  function counter() {
    number +=1;
    console.log(number);
  }
  
  return counter;
}

const counter1 = makeCounter();
counter1();
counter1();
counter1();


const counter2 = makeCounter();
counter2();
counter2();
counter2();
counter2();
