import React from "react"

export default function Box(props) {
//  console.log(props.key)   // will cause a Warning: Box: `key` is not a prop." it will be "undefined"  beacause I have no access to key inside of this component
//  console.log(props.id)    // I can use this property instead of "key" inside onClick event listener

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
 //         <div  onClick={toggle}  className="box" style={styles}>Box #{props.number}</div> 
            <div 
                className="box" 
                style={styles}
/*              onClick={props.toggle}  // This is the point where some additional complexity needs to be added in order for this to work correctly 
(https://scrimba.com/learn/learnreact/boxes-challenge-part-32-unified-state-coc544380b8da728809b4b5f2)
When each box was initializing its own state it was really somple to know which box was flipping its value, because each box was maintaining its own state.
However, now with our toggle() function the toggle() function has no idea  which box just ran its code, so in my App() component  
if I wanted to use setSquares() because "squares" is an array, I need to figure out which of the items in the array triggered setSquares() 
so that I can update the correct one and leave all the other ones exactly how they were. And this is whwere essentially forced to do something
clever. 
    Our goal is to give our toggle() function the ability to know which box was clicked so that we can correctly update the state array.
One way we could do that is to make it so that the toggle function takes the "id" of the box as the parameter. However, as it's currently 
set up this is not going to work and that's because in our onClick={props.toggle} here we really don't get to decide what parameter 
gets passed to our function. Every browser will pass an event handler function the event itself, - it's an event object that describes 
a bunck of information about the event, in fact I can see that really quick here: in the App() component in the toggle() function 
    function toggle(id) {
            console.log("Clicked!")
            console.log(id)
    }
I will instead of console logging "Clicked!, let's console.log(id) which we're going to be disapponited in what actually happens: click a box
and you'll see I get a synthetic base event:

SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: div.box, …}

clearly not the "id" of the box that was clicked. However we can work around this by instead of just blindly running:

                onClick={props.toggle}  

we can run our own function which then runs props.toggle; this is the function that is going to receive the event :   */

//              onClick={(event) => props.toggle(props.id)}         // or:
//              onClick={(e) => props.toggle(props.id)}

/*  however, we're not going to make use of that, so I just delete "event" and then this function can run props.toggle and now we 
  have the ability to pass whatever we want here. In this case what we should pass is the "id" of this box, however 
  currently we're not receiving that "id", shure I have this key={square.id} prop, however the "key" prop really is intended for something 
  completely different and I'm fairly certain that if I iven tried to access that "key" prop, let's console.log(props.key) - I'm going to 
  get a bunch of "undefined"-s:

  "Warning: Box: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props) at Box (exe1.bundle.js:86:21) at main at App (exe1.bundle.js:31:48)"
›undefined
›undefined
›undefined
›undefined
›undefined
›undefined

  I don't have access to props.key inside of the Box() component. But I can pass another prop let's call it
    id={square.id}
  and it essentially is the exact same thing. Now i do have access inside of Box() to props.id so if I
    console.log(props.id) 
  it gets the IDs of each of the boxes. And now I can use  use props.id to pass that infomation - pass the id to my toggle() function: 
    onClick={() => props.toggle(props.id)}
      
  now over in App.jsx if I console.log(id) the "id" that's coming in when I click it - it shows the id of boxe on which I clicked. And now
  I can use that "id" to update the correct square in my setSquares() function.

*/


//              onClick={() => props.toggle(props.id)}    // if we use the closure in App.js when invoking <Box /> component 
                                                            // we change this line to the following:

                onClick={props.toggle}        // for variant using closure


            >              
            </div> 
    )
}
