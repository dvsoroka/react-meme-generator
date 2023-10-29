import React from "react"

export default function Box(props) {
//  console.log(props.key)   // will cause a Warning: Box: `key` is not a prop." it will be "undefined"  beacause I have no access to key inside of this component
//  console.log(props.id)    // I can use this property instead of "key" inside onClick event listener

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
    }

    return (
 //         <div  onClick={toggle}  className="box" style={styles}>Box #{props.number}</div> 
            <div 
                className="box" 
                style={styles}
//              onClick={(event) => props.toggle(props.id)}
//              onClick={(e) => props.toggle(props.id)}



//                onClick={() => props.toggle(props.id)}    // if we use the closure in App.js when invoking <Box /> component 
                                                            // we change this line to thr following:

                  onClick={props.toggle}


            >              
            </div> 
    )
}
