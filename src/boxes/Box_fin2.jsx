import React from 'react'



export default function Box(props) {

    const styles = {
        
        backgroundColor: props.mode ? props.on ? "black" : "grey" : props.on ? "grey" : "transparent"
     }

    return (
        <div  
            className='box'  
            style={styles}
 //         onClick={() => props.handleClick(props.id)}   // Variant without closure
            onClick={props.handleClick}             // using closure
        > 
        </div>
    )
}