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

        function watchWidth() {                         // and then inside of our callback function instead of console logging "Resized"
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)           // we will set the windowWidth to be the window.innerWidth at the time that this function runs
        }
        window.addEventListener("resize", watchWidth)
        return function() {
            console.log("Cleaning up.")
            window.removeEventListener("resize", watchWidth)
        }
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

https://scrimba.com/learn/learnreact/useeffect-cleanup-function-coa6a4c9985b4339f164fe0ab
Previously ... 
as a reminder it's because we set up an EventListener on the window which registered it with our browser 
and even removing the <WindowTracker /> component by toggling it off does not automatically remove that 
EventListener. One thing you should always try to be aware of when you are interfacing with side effects
using useEffect() is any potential consequences that might happen if you don't clean up the things that 
you do in that side effect. This is just one example there we're adding an event listener that is not 
getting cleaned up when this component unmounts but there certainly are other instances of this let's say
for example, you are creating a websocket connection with, maybe, a chat api and you have a chat App that 
will update your screen automatically every time there's a new chat message on the server, well, when you
create that subscription to that chat api and then try to unmount the component, it's always a good idea 
to then sever (разъединить) that websocket connection as a way to, so to speak, clean up the effect that
you have created in your useEffect; it's called the useEffect cleanup. 
 Remember, we have a function as our first parameter to useEffect:

   React.useEffect(() => {
        window.addEventListener("resize", function() {                         
            setWindowWidth(window.innerWidth)           
        })
    }, [])

but currently we're not actually returning anything from that function. Well, as it turns out what we can return 
from useEffect() can be a function and you can think of this as a cleanup function. 

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        })
        return function() {
            
        }
    }, [])

So when React runs our useEffect(() => { } function here, it will receive in return another function to then clean up 
any side effects that you might have created; in reality it (this returned function) has no idea what the side effects 
are that we created so what we put in the body of our cleanup function should be something that we write to clean up 
our own side effects. In the case of adding an EventListener, there's a sister method called .removeEventListener();
with .removeEventListener we need to pass the exact same function that we provided when we added it and so I actually 
need to move this outside the EventListener and set it up let's call this function "watchWidth()", than I can pass in
the name of "watchWidth" when I'm adding my event listener but this allows me to then say:
window.removeEventListener( "resize" event, and the event listener function I want you to remove - is this watchWidth() function ):

 React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])


 Okay, let's see that this is working, first, I'll put this console.log that says "Setting up..." inside of my 
 watchWidth() event listener and then inside of my cleanup function i'll console.log("Cleaning up..").
 Let's resize the window, look at our console, - it's running "Setting up..." every time the watchWidth() 
 function runs every time the resize event happens, - so we have a bunch of "Setting up..."-s, and let me 
 toggle off the windowTracker and we see that we get the cleaning up function that ran. And now if I resize my
 browser I don't get that memory leak warning like I had before.
    So let's take a step back and walk through this logically to understand exactly what's going on here.
Our App() compponent is  deciding when the <WindowTracker /> component should be rendered: as soon as we toggle 
that on and it renders it to the screen, it sets the "windowWidth" state, it determines that should be based on the
current window.innerWidth  at tha instant that this component gets rendered. Remember, useEffect() will only run 
after the DOM has been painted or in other words once this <h1>Window width: {windowWidth}</h1> has been rendered 
to the screen, so after  creating the state 
const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
it will render our <h1> and then it will register our useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, []) 

this useEffect has no dependences [] because there's nothing inside of here that's going to make me
re-register a new event listener, and so it registers this event listener  window.addEventListener("resize", watchWidth)
on the "resize" event on the window;  and then any time I resize it's reacting to the event listener that I set up,
and then when I toggle off the WindowTracker React recognizes that this component has rached the end of its life
cycle and it's about to be removed from the DOM and so it takes the function that it received from us when it first 
set up our useEffect:
        return function() {
            window.removeEventListener("resize", watchWidth)
        }

and it just runs it, in fact it runs it kind of blindly, - it doesn't know what that function 
contains, but we as the developers are expected to successfully clean up after our side effects, 
and so we remove that event listener and it is gone. 
    So one last recap, useEffect takes two parameters: the first one is the Effect that you want to run,
the second one is any dependencies that React watch for changes in to rerun your effect function, and that 
effect function is allowed to return another function that can clean up after any side effects that might be
lingering (непрекращающийся, сохраняющийся, затяжной, длительный, долгий) in case your component dies.
Now for many effects that you set up you might find youself not actually needing to provide a cleanup function 
at all - this is not a required part of useEffect() for it to work.

*/