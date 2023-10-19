//import React from "react"

import './style.css'
import Header from './components/Header'
import Meme from './components/Meme'
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

export default function App() {
    return (
      <div>  
        <Header />
        <Meme />
    </div>
    )
}


/*
export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }

    
     // Challenge: 
     // Log something to the console when the mouse hovers over the image
     
    function handleOnMouseOver() {
        console.log("MouseOver")
    }
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" onMouseOver={handleOnMouseOver}/>
            <button onClick={handleClick}>Click me</button>
      </div>
    )
}

*/
