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

/*
    So now when I make changes of the window width, our text in the window is updating dynamically.
 Now let's take a look at a little bug that we have: remember, our "WindowTracker" component is only mounting when
 its parent is allowing it to render with the "show" wariable. 
 
    When it rendered the <WindowTracker /> it immediately launched or created an event listener any time the "resize" event
happens; that EventListener is registered with the DOM itself, so, even if I toggle off my component and then try to 
resize the window, we see that we get this warning in React_17
    
*/

/* When toggling off the "show" while trying to resize the window 
 we are getting the following warning (actually NO in vite+ReactJs):
 
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. at WindowTracker (exe1.bundle.js:69:56)

this is what we call a "memory leak"



For latest React version. It's not consider a issue by official any more:

Notable Changes
No warning about setState on unmounted components: Previously, React warned about memory leaks when you call 
setState on an unmounted component. This warning was added for subscriptions, but people primarily run into 
it in scenarios where setting state is fine, and workarounds make the code worse. We've facebook/react#22114 this warning.

Upgrading to react18 can solve this problem, but react18 will affect other libraries

https://github.com/ant-design/ant-design/issues/42378
*/