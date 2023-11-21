import React from "react"

export default function WindowTracker() {
/*
    return (
        <h1>Window width: {window.innerWidth}</h1>
    )
}
https://scrimba.com/learn/learnreact/state-and-effect-practices-co3d647f0b559d6e65b6a2762
    Here's something to take a look at: if I widen my window a  little bit and then toggle this off and back on, 
you'll see that our window width changed, and that's because when this component window tracker gets toggled off 
it essentially what's called unmpunted, - is completely removed from the DOM. When I click it back on it's remounted
and therefore it will run this window.innerWidth() which gives me the updated version of window width. THe truth is
though we can do better than this. What we can do is add an event listener to our window that listens for the "resize"
event and then whenever the window is resized we can set some local states to our window tracker, so, that we can 
display the correct window width at any given width without toggling it on and off or refresh our page completely. 
However, because it's an effect on the window I can't simply add something like an onResize event: 

    return (
        <h1 onResize>Window width: {window.innerWidth}</h1>
    )

like we have with other event listeners up until now and so, I'm going to do a little bit of manual imperative 
DOM manipulation. And because I'm going to intracting with a system outside of our WindowTracker component, 
 in other words, window itself, we have to use React.useEffect() to interact with some kind of "outside"
 system and keep our local state in sync with it.
    So I'm going to set up an Effect with React.useEffect(() => {}, []) and when we think about dependences,
 at first glance it would be really tempting to say: I want to rerun this effect if window.innerWidth ever
 changes. However something to keep in mind is that this function, our component function gets run each
 time the component is rendered. Right now when the component is rendered window.innerWidth is equal to 474,
 and that's a constant value that's not going to change on its own. So let's say for example, I refresh 
 this I change the window size just a little bit, there has been nothing to trigger a re-render of my 
 WindowTracker() component because window.innerWidth is not something that automatically re-renders a 
 component in react. Instead, we're going to listen for a resize event on a window: 
 
 window.addEventListener("resize", function() {})

 and then we will run the following function, for now let's just console.log("Resized"):
 
 React.useEffect(() => {
        window.addEventListener("resize", function() {
            console.log("Resized")
        })
    }, [])
 */

    /**
     * Challenge #2:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", function() {  // and then inside of our callback function instead of console logging "Resized"
            setWindowWidth(window.innerWidth)           // we will set the windowWidth to be the window.innerWidth at the time that this function runs
//          console.log("Resized")
        })
    }, [])

    return (
 //     <h1>Window width: {window.innerWidth}</h1>   
        <h1>Window width: {windowWidth}</h1>        // and we will look at the windowWidth instead of window.innerWidth
    )
}

/*
    So now when I make changes of the window width, our text in the window is updating dynamically.
 Now let's take a look at a little bug that we have: remember, our "WindowTracker" component is only mounting when
 its parent is allowing it to render with this "show" wariable: 

 return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show  && <WindowTracker />}
        </div>
    )

When it rendered the <WindowTracker /> it immediately launched or created an event listener any time the "resize" event
happens; that EventListener is registered with the DOM itself, so, even if I toggle off my component and then try to 
resize the window, we see that we get this warning in React_17:

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. at WindowTracker (exe1.bundle.js:69:56)

and it tells us we can't update react state on an unmounted component. So in the end what happened is our <WindowTracker />
is no longer a part of the DOM, but the browser itself is still listening for the "resize" event and trying to set the
windoWidth of an unmounted component. This is something called a "memory leak". 
*/