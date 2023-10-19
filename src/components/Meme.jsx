//import React from 'react'
//import face from '../assets/Troll_Face.png'
import memesData from "../memesData"

export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     * 
     
    let memes = memesData.data.memes
    let number = Math.floor(Math.random() * (memes.length+1));
    console.log(number)
    let meme = memes[number]
    let url = meme.url
    alert(url);
    console.log({url});

    */

    let memes = memesData.data.memes
    function getRandomImage() {
        
        let number = Math.floor(Math.random() * (memes.length));
        console.log(number)
        let url = memes[number].url
        console.log(url)

    }
    return (
        <main>
{/*            <form className="form">      We change our <form> element into a <div> element because 
                                            when you have a <button>  inside of a form it actually submits that form and tends to refresh
                                            a page unless you stop it. But I realized that actually there is no reason for this to be collected 
                                            together in a form because ultimately this button does its own thing by getting a new image, 
                                            it is not take these inputs and submit them somewhere. So, in this case I feel like it's okay 
                                            to have our inputs floating outside of a form and that way i means that when we click our button,
                                            it doesn't refresh our page because it's not trying to submit a form. 
*/}
            <div className="form">
                    <input 
                        type="text" 
                        placeholder="Top text" 
                        className="form--input" 
                    />
                
                    <input 
                        type="text"
                        placeholder="Bottom text" 
                        className="form--input"   
                    />
                
                    <button 
                        onClick={getRandomImage} 
                        className="form--button"
                    >
                        Get a new meme image 🖼 
                    </button>
{/*             </form>          */}
            </div>
                  
        </main>
    )
}
