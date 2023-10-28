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
    let switcher = props.on

    const [isOn, setIsOn] = React.useState(switcher)

    console.log("switcher: ", isOn)

    const styles = {
        backgroundColor: isOn ? "#222222" : "transparent",
    }

    function  ChangeColor() {
        setIsOn(prevState => !prevState)
    }

        
    return (
            <div  onClick={ChangeColor}  className="box" style={styles}>Box #{props.number}</div> 
    )
}