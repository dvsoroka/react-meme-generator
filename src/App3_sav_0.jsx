// https://scrimba.com/learn/learnreact/complex-state-updating-state-objects-cJLgWJSN 

import React from "react"

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

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png" // Your code here
    console.log(starIcon)

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
                    <img 
                        src={`./${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
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
