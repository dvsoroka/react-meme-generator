import React from "react"

export default function App() {
    /**
     * Challenge: 1) Set up state to track our count (initial value is 0)
     *            
     */
//  To create a new state we simply use React.useState(0) and we provide the initial value of zero
// and then we need to essentially catch what this returns in some variables, it is an array and 
// because what we get is an array I can destructure it, I can call it whatever I want. 
// In the first index I receive the value which I'll call the "count" and by convention I will call
// my setter function "setCount" (this is the function that when I call it will allow me to update the state here):
    const [count, setCount] = React.useState(0)
    /**
     * Challenge: 2) Create a function called "add" that runs when the + button is clicked
     */
// A good rule of thumb to use is to declare these functions inside of your component 
// We do have access to our current "count" and so I can just say to set the count equal to whatever the
// current "count" is plus 1:  "setCount(count + 1)" But I want to use this as a chance to show you a common misconseption 
// or fallacy (заблуждение) that beginners in React tent to fall into, and that is trying to do something like "count++": in
// the philosophy of React something like "count++" is strictly forbidden and that's because we newer want to modify state directly
// what I mean by this "count++" is a shorthand for "count = count + 1" and in this case using  "count = " is a big No-No you will
// never ever do that when you're modifying state. The entire reason that we have this "setCount" function is so that we can simply
// provide a new updated value but we wil never ever want to run an equal sign after our state value. 
// So we can put this to setCount(count + 1)  so that we simply provide a new value to our setter function.
// However there's another way that we can use this setter function and that is to provide a callback function inside 
//      setcount(function() {
//
//      })
// When we provide a callback function as the parameter to our setter function, this function needs to return the new 
// value that we want state to be:
//      setCount(function() {
//          return count + 1
//      }) 
// However this is where the best practices comes in, anytime we need our old state value to determine a new state value
// if we provide this function React will pass this function the old value as the parameter here:
//      setCount(function(oldValue) {                       
//          return oldValue + 1             // what we can do is then take this old value and use that as our reference  
//      })                                  // to what "count" was at the time that this function was called 
// And with arrow function: 
//      setcount(oldValue => oldValue + 1)
// Usually I'll do use the prefix of "prev-" and then use my state value so I'll say prevCount as an previous "count";
// this is the convention you'll usually se me using whenever I'm using a callback function as my parameter to setCount()
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function add() {        
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount((prevCount) => {return prevCount - 1})
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
{/*             <h1>0</h1>      then I use this "count"  value to replace our zero here */  }                
                <h1>{count}</h1> 
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}