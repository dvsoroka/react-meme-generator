import React from "react"

export default function WindowTracker() {
    /**
     * https://scrimba.com/learn/learnreact/state-and-effect-practices-co3d647f0b559d6e65b6a2762
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
//          console.log("Resized!")
        })
    }, [])

    return (
 //     <h1>Window width: {window.innerWidth}</h1>
        <h1>Window width: {windowWidth}</h1>
    )
}