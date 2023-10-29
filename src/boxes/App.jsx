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

        setSquares(prevSquares => {
            return prevSquares.map((square) => {
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
            toggle={() => toggle(square.id)}
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
