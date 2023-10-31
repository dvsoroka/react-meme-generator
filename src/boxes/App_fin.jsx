import React from 'react'

import boxes from './boxes'
import Box from './Box_fin'

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    // function toggle(id) {
    //   setSquares(prevSquares => {
    //     const newSquares = []
    //     for (let i = 0; i < prevSquares.length; i+=1) {
    //         const currentSquare = prevSquares[i]
    //         if (currentSquare.id === id) {
    //             const newItem = {
    //                 ...currentSquare,
    //                 on: !currentSquare.on
    //             }
    //             newSquares.push(newItem)
    //         } else {
    //             newSquares.push(currentSquare)
    //         }
    //     }
    //     return newSquares
    //   })
        
    // }

    let toggle = (id) => {
        setSquares(prevSquares => (
            prevSquares.map(square => square.id === id ? {...square, on: !square.on} : square)
        ))
    } 
    // function toggle(id) {

    //     setSquares(prevSquares => {
    //         return prevSquares.map((square) => {
    //             return square.id === id ? {...square, on: !square.on} : square
    //         })
    //     })
    // }
    const squaresItems = squares.map(square => {
        return (
            
              <Box 
                key={square.id}
                id={square.id}
                on={square.on}
                handleClick={toggle}
              />
              
        )}
    )

    return (
        <main>
            {squaresItems}
        </main>
    )

}