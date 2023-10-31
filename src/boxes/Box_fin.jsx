import React from 'react'

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#2F2F2F" : "#A9A9A9"
    }
    return (
        <div className='box' style={styles} onClick={() => props.handleClick(props.id)} >

        </div>
    )
}