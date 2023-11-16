import React from 'react'
//import face from '../assets/Troll_Face.png'
import memesData from "../memesData"

export default function Meme() {
//   const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    /**
     * Challenge #52  https://scrimba.com/learn/learnreact/project-add-text-to-image-co9dd4288bcdb0c0cfe7a2d9c: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
     const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value   // We use the computed property name in brackets [name]
        }))

    }

     function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
//        setMemeImage(memesArray[randomNumber].url)
        setMeme(prevState => ({
            ...prevState,
//          topText: memesArray[randomNumber].name,
//          bottomText: "",
            randomImage: url
        }))
        console.log(meme)
        
    }

    

    const [count, setCount] = React.useState(0)
    
    function add() {        
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount((prevCount) => {return prevCount - 1})
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
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                
                    <input 
                        type="text"
                        placeholder="Bottom text" 
                        className="form--input"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}   
                    />
                
                    <button 
                        onClick={getMemeImage}  //   onClick={getRandomImage}
                        className="form--button"
                    >
                        Get a new meme image 🖼 
                    </button>
{/*             </form>          */}
            </div>
            <div className="meme">
{/*             <img src={memeImage} className="meme--image" />          */}
                <img src={meme.randomImage} className="meme--image" />
{/*My           <img className="meme--image" src={memeImage || "./src/assets/memeimg.svg"}></img>     */}
{/*                
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
*/}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
