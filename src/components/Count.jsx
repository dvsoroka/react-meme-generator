import React from "react"


export default function Counter(props) {
//  console.log(props)
    console.log("Count component rendered")
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}