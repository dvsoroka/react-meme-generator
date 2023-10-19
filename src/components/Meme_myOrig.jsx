//import React from 'react'
//import face from '../assets/Troll_Face.png'


export default function Meme() {
    return (
        <main className='meme'>
            <form action="" method="get" className='form--meme'>
              <div className='input--fields'>
                <div className='first--field'>
                    <label htmlFor="first">Enter the begining of phrase:</label>
                    <input className='input--field' type='text' name="first" id="first" placeholder="Shut up" required/>
                </div>

                <div className='first--field'>
                    <label htmlFor="second">Enter the ending of phrase:</label>
                    <input className='input--field' type='text' name="second" id="second" placeholder="and take my money" required/>
                </div>
              </div>
              <div className='submit--div'>
                
                    <input className='form--submit' type="submit" value="Get a new meme image"/>
               
              </div>
            </form>
            
            <h2 className="header--title">Meme Generator</h2>  
            <h4 className="header--project">React Course - Project 3</h4>

            <div>
            


            
            </div>
        </main>
    )
}
