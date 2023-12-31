import React from "react"
import boxes from "./boxes"
import myBoxes from "./myBoxes"
import Box from "./Box"

export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */


    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
    const [squares, setSquares] = React.useState(boxes)

    const [mySquares, setMySquares] = React.useState(myBoxes)    
    
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"


    // const mode = props.darkMode ? "#222222" : "#cccccc"
    // const styles = {
    //     backgroundColor: mode
    // }
    console.log (squares.length % 2)
    let reminder = squares.length % 2

    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc",
        color: props.darkMode ? "violet" : "darkred",
 //     backgroundColor: (reminder === 0) ? "orange" : "magenta",
    }

    const myStyles = {
        backgroundColor: props.darkMode ? "blue" : "#87CEEB"
     }

   /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

    const squareElements = squares.map(square => (
 //       <div style={styles} className="box" key={square.id}>{square.id + 100}</div>
          <Box key={square.id} on={square.on}  number={square.id}/>
    ))

/*  
In HTML, for example in index.html, I can add an attribute called "style" and in here I can insert CSS code,
  for example I could give my <body> a style  and say:

  <body style="background-color: black;">
    <div id="root"></div>
  just like I can do this in HTML, I can do exact same thing in React. However, because it's React and it's 
  JavaScript I can change the style dynamically depending on, for example, the value of our state, or the value
  of incoming props on a component.
    To add dynamic style I can add a style= property to my <div> and in React I'm not going to put a string "" 
  the same way we did in html, instead I'm going to provide an object

  <div style={} - this set of curly braces does not represent an object it simply represents me entering into 
  JavaScript outside of JSX or rather it allows me to put JavaScript inside of my JSX.
  Since I need to represent my Style as an object, I'm going to put a second set of curly braces:
        
    <div style={{}}
  
  this inner set of curly braces represents a JavaScript object and this first (outside) set of curly braces 
  represents me going into JavaScript from JSX. 
    Oftentimes to avoid a confusion what I do is I will not define that object directly inside of my markup 
  but instead I will create a separate variable called "styles" and set equal to an object:

    const styles = {
// (!)  background-color: "black"         // WRONG!!! because it has to be camel-cased:
        backgroundColor: "black"
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

  this makes a lot more clear, and I can put "styles" directly inside of my markup here:

    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))

  one thing to know about these styles is that they need to be camel-cased: if I'm changing the bacground color
  I can't say "background-color" because this is not a valid key name in a JavaScript object. Not only that, but
  when I'm modifying the properties of a DOM element, you might remember that I could to something like 
    document.getElementById("something") - say some kinfd of ID and I can say .style.backgoundColor with  a 
  camel-case property name and set that equal to something:

    document.getElementById("something").style.backgroundColor = "black"   
                                              \  
  essentially that's exactly what we're doing here, we are setting the style of our DOM element to be an object, 
  hence I can use the dot syntax here and then I'm using the "backgroundColor" CSS property but of course in the 
  camel version for JavaScript when doing manual DOM JavaScript manipulation. So in the React we use camel-cased property, 
  for example "backgroundColor". Then, because this is an object I'm not going to use equal sign, I'm going to use the colon 
  to give my key a value and let's set it to "black":

    const styles = {
        backgroundColor: "black"
    }

   const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    )) 
  
  When I refresh my "styles" which include a backgroundColor of "green" are now being applied 
  as the style of every square that I'm rendering or every <div> that I'm rendering.  So why is this beneficial 
  over just using CSS? - well, because I'm using JavaScript I don't necesserely have to have a hard-coded "green"
  value here. Let's suppose for a second that my App component is going to receive a prop that called "darkMode".
  
  export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    const styles = {
        backgroundColor: "black"
    }

  In fact let's go over to index.js and  we will say that the <App /> component is receiving a prop 
  called "darkMode" and let's set it to "true" for now: 

  ReactDOM.render(<App darkMode={true} />, document.getElementById("root"))

  or 

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App darkMode={false}/>
    </React.StrictMode>,
  )

  over in my App I'm accepting props here 
  
  export default function App(props) { 
    . . .
    props.darkMode
  }
  and I will have a prop called props.darkMode and let's say that if my props.darkMode is "true" 
  I want backgroundColor of my squares to be "black", and if it's "false" I want it to be "ligthgray". 
  This is something I can use a ternary for:

  const styles = {
        backgroundColor: props.darkMode ? "black" : "lightgray" 
  }


*/



    const mySquareElements = mySquares.map(item => (
        <div style={{backgroundColor: item.color}} className="my--box" key={item.id}>{item.text}</div>
    ))




    const [boxesArray, setBox] = React.useState(boxes)

    const boxesElements = boxesArray.map(item => {
        return <div key={item.id}>{item.id}</div>
    })   

    return (
        <main>
                {squareElements}

            <div className="mySquares--container" style={myStyles}>   
                {mySquareElements}
            </div>
            
        </main>
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
