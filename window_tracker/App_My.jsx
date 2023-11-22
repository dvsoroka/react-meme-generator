import React from 'react'

import WindowTracker from './WindowTrackerMy'


export default function App() {
    const [show, setShow] = React.useState(true)

    function toggle() {
//      console.log("Show")
        setShow(prevShow => !prevShow)
    }

    return (
        <div className='container'>
            <button onClick={toggle}>
               Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
         </div>
    )
}