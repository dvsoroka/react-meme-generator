
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
//import App from './App1.jsx'      // here is a practical drill for React.useState()
// import './index.css'
import './style.css'
// import './style1.css'         // here is a styling for the  practical drill for React.useState()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// ReactDOM.render(<App />, document.getElementById("root"))

/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 


function App() {
//  const thingsArray = ["Thing 1", "Thing 2"]
    const [thingsArray, setThings] = React.useState(["Thing 1", "Thing 2"])  
  

  /*
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     
    const thingsElements = thingsArray.map(thing => {
        return <p key={thing}>{thing}</p>
      }
    )
   
//    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`
//  thingsArray.push(newThingText)
    setThings(prevState => [...prevState, newThingText])
 
/* In plain Javascript we should wrap our {thingsElements} by <div id="things"> tag and use the following code to update our list  

    const thingsDiv = document.getElementById("things")
    let p = document.createElement("p");
    console.log(thingsDiv)
    thingsDiv.append(newThingText, p)


  console.log(thingsArray)
}

  return (
    <div>
        <button onClick={addItem}>Add Item</button>

         {/* Insert the things here*
         <div id="things">
            {thingsElements}
         </div>
    </div>
  )
}


*/

/* 
React "state" will allow us to sort of "hook" into the component and make it so that whenever we update 
our "state" which is really just values that we're saving inside of this component, it makes it so react 
will update the user interface based on any changes that happen to those values that are being saved in "state".

"Props" refers to the properties being passed into a component in order for it to 
work correctly, similar to how a function receives parameters: "from above." A component 
receiving props is not allowed to modify those props. (I.e. they are "immutable".)

function addTwoNumbers(a, b) {
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))

similarly in React I would never want to have a component that takes props 
and then automatically sets props.coverImage to something else :

function Navbar(props) {
    props.coverImage = "something else"
}

(this is a huge red flag),
you would never want to set props.anything or props itself equals to anything different.
Because incoming props should be immutable and they should never change manually. Or, maybe, 
more specifically those props should never change from within the body of our component itself.
Now that's not to say that when I have an instance of my <Navbar /> that I can't provide a 
coverImage that changes let's say it starts out as some-image1 

<Navbar coverImage="some-image1" />

then maybe there's a button on the screen when the user clicks that button, I want my navbar's 
cover image to update to some other image

<Navbar coverImage="some-image2" />

The point is I can change the values that I pass to my component, - that's fine.
But from within the body of the (component) function I should never ever change my props. 
In the same way I would never want to change the parameters being passed to my function

"Props" refers to the properties being passed into a component in order for it to 
work correctly, (If it helps you could think of it as the properties being passed to 
a component in order to configure it, as we saw in our last section project we passed props 
to our card component in order for that card to be rausable and configure it to display th correct image,
the correct price, the correct stats like the review count and so fourth.. )

<Navbar darkMode={true} coverImage="some-image2" />

similar to how a function receives parameters: "from above." A component 
receiving props is not allowed to modify those props. (I.e. they are "immutable".)"

https://www.youtube.com/watch?v=bMknfKXIFA8 (5:21:02)

"State" on the other hand refers to values that are managed by the component 
(are defined inside the component and essentially should be changed) , similar to variables declared inside a function.
Any time your component  havs changing values that should be saved/displayed, you'll most likely going to be using state.

*/

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay
    if (hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = "evening" 
    } else {
        timeOfDay = "night"
    }

    return `Good ${timeOfDay}, ${name}!`
}

greeting("Bob");
console.log(greeting("Bob"))