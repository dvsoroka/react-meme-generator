import React from "react"

export default function Box(props) {
    /*
    3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
    <div className="box" key={square.id}>Box</div>
     */

    /**
     * Challenge 3: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    

 // We initialize the new state in each one of our box components and set its initial value to the incoming "props.on" value
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

//  However the general consensus is that if you find youself initializing state by using the incoming value of prop there's 
// probably a better vay to do this.