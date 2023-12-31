import React from "react"

export default function Box(props) {
    /*
    3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
    <div className="box" key={square.id}>Box</div>
     */

    /**
     * Challenge 3.1 (local state): Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    

 // We initialize the new (local) state in each one of our box components and set its initial value to the incoming "props.on" value
 // one benefit in doing this way is the simplicity and allowing each box  to  then update its own state 
 // (by doing so automatically every instance of our <Box /> component will also have the ability to update its own state).
 // So I'll initaializa some new state we'll call it "on" and it will also receive our setter function "setOn" 
 // by calling React.useState(). The initial value should be determined by looking at props.on
    const [on, setOn] = React.useState(props.on)

// And we update our styles to not look at props.on anymore, but to look at my new state value of "on"
    const styles = {
        backgroundColor: on ? "#222222" : "transparent",
    }

// and that way when I make a function, let's call it "toggle()" and it calls setOn() looking at the 
// previous verion of "on" and simply giving me the opposite of whatever it was 

    function toggle() {
        setOn(prevOn => !prevOn)
    }

        
    return (
            <div  onClick={toggle}  className="box" style={styles}>Box #{props.number}</div> 
    )
}

// What we've done is we've given each of these boxes its own value of state.
// So basically we've given it the ability to control itself, we've given it the control over its own value.

//  However the general consensus is that if you find youself initializing state by using the incoming value of
// some prop there's probably a better vay to do this.
//  What we did is we created new state inside of each of our <Box /> components and initioalized that state based on the 
// incoming prop of "on" and it turns out there's actually a name for when you crate state that is initialized by incoming props
// and it's called "derived state". It turns out that you probably don't need derived state; this is an article that was written
// in 2018 (https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
// It turns out that there can be some weirdness that happens if you pass a prop to a component and then just take that prop and
// set state based on that prop. If you think about it in App.js we actually created some state (const [squares, setSquares] = React.useState(boxes))
// in App.js to maintain all of the "squares" already. So, when we set state in each one of our boxes we had state both in the App
// in every one ofour boxes. Which in the end means that there are two "sources of truth". When the box had the ability to update 
// its own state it was not updating the state on the App component, it was only updating its local state that it had derived 
// based on the incoming props. And because of that there were multiple sources of truth.
//   Instead of putting state and a setter inside of each one of our boxes we're going make use of the state that already exists
// in our App, and instead we're going to create a function "toggle()" inside of our App.js component and then pass that toggle()
// function down to each one of our box instances. Any time one of our box components gets clicked it will run this toggle() function
// and essentially tell the App component: "Hey, the state that you're maintaining needs to change." Then, when that state changes  
// let's say this first object gets clicked and it changes from true to false React will re-render the App component because its
//  state has changed and therefore will re-render the box components but now with the first one having an "on" value of false. 
