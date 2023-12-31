// https://scrimba.com/learn/learnreact/complex-state-updating-state-objects-cJLgWJSN 

import React from "react"
import Star from "./components/Star"  // for Challenge #4 (Setting state from child components https://scrimba.com/learn/learnreact/setting-state-from-child-components-co5104ccd8360769343dc8e51)


export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge #1: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    
    /**
     * Challenge #2: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * 
     * let starIcon = // Your code here
     */

//    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png" // Your code here
//    console.log(starIcon)


/**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */
    
// the following line was moved to /components/Star.jsx
//let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"



/*    
    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevContact => {
            return {
                ...prevContact,                 // I have to spread in all of the properties of my old contact 
                isFavorite: !prevContact.isFavorite     // and then I wil overwrite the "isFavorite" property with a new value
            }
        })      
    }

*/

    
/* this acts like:

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                firstName: "John",
                lastName: "Doe",
                phone: "+1 (719) 555-1212",
                email: "itsmyrealname@example.com",
                isFavorite: true,                       // And then we overwrite it by the following statement:
                isFavorite: !prevContact.isFavorite     // so it tooks the last one declared and uses that as the actual value for our new object
            }
        })
    }

*/  

// We can also rewrite this function as follows:

  function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
/*   
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/star-empty.png`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />

// using "starIcon" variable inside a template string:
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
*/
    return (
        <main>
            <article className="card">
                <img src="/user.png" className="card--image" />
                <div className="card--info">
 {/** Challenge#4   <img 
                        src={`./${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
*/}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} /> 
{/** <Star isFilled={contact.isFavorite} onClick={toggleFavorite}/>  is not a real DOM element so it has no ability to handle real onClick event listener, 
  so what could I do  is still pass the "onClick" here, but realize that  "onClick" is just a custom prop that happens to be called 
  the same name as the event listener. In fact oftentimes this would be changed to "handleClick" just make it very obvious that 
  it's not a native listener. And then over in our Star component I can add a real onClick event listener and say 
  the value of this onClick will be the function that comes from props.handleClick:  
     onClick={props.handleClick}   
     
     
In this case my App component is passing the toggleFavorite() function to a child component 
and allowing that child component to run it whenever a certain event like the "click" event happens.
However, it's important to note that the context in which the toggleFavorite() function exists is still here in the parent App.js.
Which means that it can change the state that "lives" inside the parent.

  As a recap:
  - we created our toggleFavorite() function,
  - we passed it to our custom component in a custom prop called "handleClick", and 
  - then in the Star.jsx component it's receiving props and it's registering a real event listener onClick 
    whose functional value is the function that we recieved through props.handleClick.

  The ability to pass state setter functions like this one (toggleFavorite) to children components is especially crucial in React. 
     */}
                    <h2 className="card--name">
 {/**                        John Doe           */}
                            {contact.firstName} {contact.lastName}
                    </h2>
  {/**              <p className="card--contact">+1 (719) 555-1212</p>
                    <p className="card--contact">itsmyrealname@example.com</p>      */}
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
