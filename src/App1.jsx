import React from "react"

export default function App() {
//  const state = "Yes"

    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */

 //   const result = React.useState("Hello")
 
 // const result = React.useState("Yes")  // We can immediately destructure the array:
//  const [result, func] = React.useState("Yes")
    const [isImportant, func] = React.useState("Yes")
//  console.log(result)
    console.log(isImportant)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
 {/*                <h1>Yes</h1>        */}
 {/*                   <h1>{result[0]}</h1>             */}
                    <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
