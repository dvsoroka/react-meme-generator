//import React from 'react'
import face from '../assets/Troll_Face.png'


export default function Header() {
    return (
        <header className='header'>
            <img  
                   src={face} 
                   //src="./assets/Troll_Face.png"
                   alt="Troll face" 
                   className="header--image" 
            />  
{/*           <img className="nav--logo" src="../assets/img/Logo.svg" />   */} 
            <h2 className="header--title">Meme Generator</h2>  
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

