import React from "react"
import boxes from "./boxes"
import myBoxes from "./myBoxes"

export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    const [squares, setSquares] = React.useState(boxes)

    const [mySquares, setMySquares] = React.useState(myBoxes)
 //   document.getElementById("something").style.backgroundColor = "green"

    console.log(props.darkMode)
    
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"


    // const mode = props.darkMode ? "#222222" : "#cccccc"
    // const styles = {
    //     backgroundColor: mode
    // }

    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
//      backgroundColor: props.darkMode ? "black" : "lightgray"
//      backgroundColor: "black" 
    }

    const myStyles = {
        backgroundColor: props.darkMode ? "ligthblue" : "#87CEEB"
     }

   

    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}>{square.id}</div>
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

    const [thingsArray, setThings] = React.useState(["Thing 1", "Thing 2"])  
  

  /*
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
  */ 
    const thingsElements = thingsArray.map(thing => {
        return <p key={thing}>{thing}</p>
      }
    )

    console.log(thingsElements)
    console.log(boxesElements)

    return (
        <main>
{/**         <h1>Boxes will go here</h1>         */}
{/**         <div className="boxes">             */}
{/**            {boxesElements}                  */}  
                {squareElements}
        <div className="mySquares--container" style={myStyles}>  

 {/**  from https://www.youtube.com/watch?v=bMknfKXIFA8 (3:35:02)
  * 
  * export default function Joke(props) {
  *   return (
  *     <div>
  *       {props.setup && <h3>Setup: {props.setup}</h3>}
  *   
  *   another way:
  *   
  *       <h3 style={{display: props.setup ? "block" : "none"}}> Setup: {props.setup}</h3>
  *       <p>Punchline: {props.punchline}</p>
  *       <hr />
  *     </div>
  *   )
  * }
  *   
  * */}        
                {mySquareElements}
        </div>
{/**         </div>          */}
            
        </main>
    )
}