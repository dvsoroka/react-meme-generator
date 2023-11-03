import React from "react"
import boxes from "./boxes"
import myBoxes from "./myBoxes"
import Box from "./Box"

export default function App(props) {

    const [squares, setSquares] = React.useState(boxes)
    /**
     * Challenge part 3.2 (unified state): Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

    function toggle(id) {
      console.log(id)

      setSquares(prevSquares => {
          return prevSquares.map(square => {
              return square.id === id ? {...square, on: !square.on} : square
          })
      })
    }
 //     console.log(id)
      /**
       * Challenge 4: use setSquares to update the
       * correct square in the array.
       * 
       * Make sure not to directly modify state!
       * 
       * Hint: look back at the lesson on updating arrays
       * in state if you need a reminder on how to do this
       */
      



      
// The following works fine, but it's wrong because if affects the incoming props:      
  //   let myarr = [...squares]
  //   const newItem = !myarr[id-1].on
  //   myarr[id-1].on = newItem
     
  //   setSquares(prevState => (
  //     [...prevState]))
 
// Variant #2:
/* 
      setSquares(prevSquares => { 
       
        const newSquares = []

        for (let i = 0; i < prevSquares.length; i++) {
          
          if (i+1 === id) {
            
            let item = {...prevSquares[i]}
            
            item.on = !prevSquares[i].on
            
            newSquares.push(item)
          }else
          newSquares.push(prevSquares[i])
        }
        
        return newSquares

      })

    }

 //  End of variant #2 
  */  

// Variant #2.5 :
/*
    setSquares(prevSquares => {
        const newSquares = []
        for (let i = 0; i < prevSquares.length; i++) {
            const currentSquare = prevSquares[i]
            if (currentSquare.id === id) {
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else {
                newSquares.push(currentSquare)
            }
        }
        return newSquares
    })
}

*/

// Variant #3:
  //   setSquares(prevBoxes => {
  //     const newBoxes = prevBoxes.map((item) => item.id === id ?  {...item, on: !item.on} : item )
  //     return newBoxes
  //   })
  // }


// Variant #3.5:
  //       setSquares(prevSquares => {
  //           return prevSquares.map(square => square.id === id ? {...square, on: !square.on} : square)
  //       })
  // }

  //   function toggleFavorite() {
  //     setContact(prevContact => ({
  //         ...prevContact,
  //         isFavorite: !prevContact.isFavorite
  //     }))
  // }
  

    const squareElements = squares.map(square => (
/*
          <Box 
            key={square.id}
            id={square.id} 
            on={square.on}
            toggle={toggle}  
  
          />
*/
// the above <Box /> component invocation may be rewritten using closure:
          <Box 
            key={square.id}
            on={square.on}
//          toggle={toggle}
            toggle={() => toggle(square.id)}      // for closure variant

          />
    ))

    // const [boxesArray, setBox] = React.useState(boxes)

    // const boxesElements = boxesArray.map(item => {
    //     return <div key={item.id}>{item.id}</div>
    // })   

    
    return (
        <main>
                {squareElements}
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



/* https://scrimba.com/learn/learnreact/boxes-challenge-part-4-co2ee48359ffd4cb63f392139

every time I click on one of these squares Box() component is running the  click event handler that we defined here 

  onClick={()=>props.toggle(props.id)}


in the following statement :

return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}
        >
        </div>
    )

that click event handler is running toggle(props.id) function that it received through props and passing in the "id" that it also received 
through props; that toggle() function is taking that "id", running setSquares() and running this function  to determine what the newSquares
should be: we look at the previous array and simply generate a new array loop over the previous array and when we run into the square in pur "for"-loop
 (let i = 0; i < prevSquares.length; i++) 

 where the "id" matches the "id" passed into toggle()  we create a new object that will replace the old object and push that to our array; 
 if the "id"-s do not match we just push the currentSquare in its current form without any changes made to our new array newSquares.push(currentSquare).
 by returning this new array (return newSquares) React will update our squares  state array; which means that it will then re-render this 
 component:

 const squareElements = squares.map(square => (

          <Box 
            key={square.id}
            id={square.id} 
            on={square.on}
            toggle={toggle}  
  
          />
  ))

remap over all of our squares and create six new <Box /> components; pass the "on" value (on={square.on}) which was the same in five of the 
squares but different in one of them, and then in our Box() component it will simply take that prop and determine what the background color should be:

  backgroundColor: props.on ? "#222222" : "transparent"
 
doing a c-style "for"-loop this way works perfectly without any problem, but we might write this sligthly differently using something 
a little more declarative instead of imperative. I'll use the .map method to help me create a new array and return that array all in one go.
I can say "return the previousSquares.map()" and whatever I put into my .map() function here is going to help determine my new version of the
array  which then gets returned from my .map() and returned from setSquares(): 


function toggle(id) {
    setSquares(prevSquares => {
        return prevSquares.map((square) => {
            return square.id === id ? {...square, on: !square.on} : square
        })
    })
}


I need to look at each square inside of my .map() and whatever I return from this callback function inside of my .map() is what  
will get placed at the  index in my original array in the new array that I return. 
What if I use a ternary that said: "does square.id match the "id" passed into my toggle() function ?" if so, I want you to return a 
new object that has all of the properties of ...square except for the "on" propery which is the opposite of square.on (on: !squre.on)
However if the "id" does not match, then I can simply return the "square".  


One more time:

Every time box gets clickesd it runs this function below, not just props.toggle(), but this function we've defined inline here:

    onClick={() => props.toggle(props.id)}

That function will run props.toggle(), remember we did that so we could pass a parameter, - a custom parameter to props.toggle 
which we decided to be "id" of the box itself; then if we go over to the toggle() function, it will call the setSquares() - our 
state setter function and we need to use the callback function version of setSquares() because we do care what the previous array 
looked like. So, we look at the prevSquares and we're going to .map() over those squares; as a reminder .map() returns an new array
without modifying the original array that will have the same length as the original array and whatever we return from the callback function 
of .map():
 return prevSquares.map((square) => {
            return square.id === id ? {...square, on: !square.on} : square
        })

is what will get placed in the same index in the new array as what was in the original array.
What we're doing every time we loop over an item in this array is we're checking if its "id" matches the "id" that we passed into 
our toggle() function; if those "id"-s match then that means it is the square that wes cliked ( square.id === id ), if that's true "?"
then I want to replace the old object with a brand new object which is why I have these curly braces here: "? {..." and this is crucial
so that I'm not updating state directly, this object is going to pull in all of the values of "square" exactly as it was, but then it's
going to overwrite the "on" value with its opposite " ? {...square, on: !square.on} : square " - however if this is not he box that was clicked, then
just give me the old "square". In this case because I'm not making any modifications to it I don't need to create a new object and 
spread in the old "square" or anything like that:

        return square.id === id ? {...square, on: !square.on} : {...square}

  I just hand the old "square" object directly to my new array: 
        
        return square.id === id ? {...square, on: !square.on} : square


I did want to show you one other rather clever solution that we could use instead of passing an id={square.id} down to the <Box />
and that is that we could just say our toggle() function that we're passing down toggle={toggle} just like we did inside of our Box(),
is going to be an individualized toggle function, this entire function here toggle={() => toggle}, however we can pass the square.id 
immediately as we're passing this toggle function down:
      
    toggle={() => toggle(square.id)}

in essence this creates something called a "closure" where each instance of our <Box /> will have its own "toggle()" and it will remember 
its own "id" which means I can get rid of this id={square.id} prop and over in Box.js I can change this "onClick={() => props.toggle(props.id)}"
back to just "onClick={props.toggle}"
        


https://www.youtube.com/watch?v=bMknfKXIFA8  (7:28:34)
*/