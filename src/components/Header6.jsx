import React from "react"

export default function Header(props) {
    /**
     * Challenge #6 (Passing data around https://scrimba.com/learn/learnreact/passing-data-around-coc1c4e8db27909ac7f804244):
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
//My    const [user, setUser] = React.useState("Joe")
    
    
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}