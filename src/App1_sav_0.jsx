import React from "react"

export default function App() {
//  const result = React.useState("Yes")  
// We can immediately destructure the array:
//  const [result, func] = React.useState("Yes")


/* Normally if we had a variable where we saving this, if we just said:
    let isImportant = "Yes"     
                            // then we already know we could simply say: 
    isImportant = "No"
                            // however when we're working with "state" we can't simply say: isImportant = "No"
                            // instead we are given a function that allows us to make these changes so that React can handle 
                            // those changes accordingly; there is a convention that function is called "set"+"Variable"

    const [isImportant, func] = React.useState("Yes")
*/
    const [isImportant, setIsImportant] = React.useState("Yes") // and this setIsImportant is a function I can run and whatever value I provide to it
                                                                // is going to be the new version of "state" for example: setIsImportant("No")
//  setTimeout(() => setIsImportant("No"), 1500)


/**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
    
function handleClick() {
    setIsImportant("No");
    setTimeout(() => setIsImportant("YES!"), 3500)
}


    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                    <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
