import React from "react"


export default function Star(props) {
    console.log(props.isFilled)
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    
    return (
        <img                            // this image has the ability to recieve the onClick event listener 
            src={`./${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick } 
/* The value of this "onClick" event listener would be the function that was passed 
to our component as a property handleClick={toggleFavorite}. 
In our Star component I can add a real onClick event listener and say 
the value of this onClick will be the function that comes from props.handleClick:  
   onClick={props.handleClick}   
In this case my App component is passing the toggleFavorite() function to a child component 
and allowing that child component to run it whenever a certain event like the "click" event happens   
*/
            />
    )
}