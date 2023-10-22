//import React, {useState} from "react"
import React from "react"


export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut, setIsGoingOut] = React.useState(true)
//  const [isGoingOut, setIsGoingOut] = useState(true)          // instead of "React.useState" we can simple write "useState" if desrutured when importing like: "import React, {useState} from React"

    function changeMind() {
//      setIsGoingOut(prevState => prevState ? false : true)
        setIsGoingOut(prevState => !prevState)   // just return the opposite of what it currently is
    }


// (isGoingOut === true) ? answer = "Yes" : answer = "No"    
//  isGoingOut ? answer = "Yes" :  answer = "No"
    
//  let answer = isGoingOut === true ? "Yes" : "No"
    let answer = isGoingOut  ? "Yes" : "No"

    console.log(answer)

    return (
        <div className="state">
{/*         <h1 className="state--title">Do I feel like going out tonight?</h1>          */}
            <h1 className="state--title">Do I feel like going out tonight? - {isGoingOut.toString()}</h1>
           <div className="state--value" onClick={changeMind}>      

{/*         <div className="state--value" onClick={() => setIsGoingOut(prevState => prevState ? false : true)}>      */}

{/* Best solution:  
            <div className="state--value" onClick={() => setIsGoingOut((prevState) => !prevState)}> 

*/}

{/*            <h1>{answer}</h1>                  */}
{/*            <h1>{isGoingOut  ? "Yes" : "No" }</h1>       */} 

{/*            <h1>Yes</h1>    */}
  
               <h1>{isGoingOut  ? "Yes" : "No" }</h1> 


{/*            <h1>{ isGoingOut.toString() }</h1>           */}
            </div>
        </div>
    )
}