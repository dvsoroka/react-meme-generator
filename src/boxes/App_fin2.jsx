import React from 'react'
import boxes from './boxes'
import Box from './Box_fin2'

export default function App(props) {

    console.log(props.darkMode)
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {

        setSquares(prevSquares => { 
            return  prevSquares.map(square => square.id === id? {...square, on: !square.on}: square) })
        
    }



    const squareElements = squares.map(square => {
      return (
        <Box 
            key={square.id}
//          id={square.id}                  //variant  without closure
            on={square.on}
//          handleClick={toggle}            //variant  without closure
            handleClick={() => toggle(square.id)}
            mode={props.darkMode}
        />
      )
    })

    console.log(boxes)
    console.log (squareElements)

    return (
        <main>
            {squareElements}
        </main>
    )
}