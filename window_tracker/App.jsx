import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {
    /** https://scrimba.com/learn/learnreact/state-and-effect-practices-co3d647f0b559d6e65b6a2762
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    const [show, setShow] = React.useState(true)

    function toggle() {
        setShow(prevShow => !prevShow)
    }

    console.log(show)

    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show  && <WindowTracker />}
        </div>
    )
}

/* When toggling off the "show" while trying to resize the window 
 we are getting the following warning (actually NO in vite+ReactJs):
 
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. at WindowTracker (exe1.bundle.js:69:56)

this is what we call a "memory leak"
*/