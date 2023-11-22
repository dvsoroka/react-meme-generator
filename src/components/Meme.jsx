import React from 'react'
//import face from '../assets/Troll_Face.png'
//#53 import memesData from "../memesData"

export default function Meme() {
//   const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    /**
     * Challenge #52  https://scrimba.com/learn/learnreact/project-add-text-to-image-co9dd4288bcdb0c0cfe7a2d9c: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

    /**
     *  https://scrimba.com/learn/learnreact/project-get-memes-from-api-coe9a494f854435f2630f2ce4
     * 
     * Challenge #53: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
     const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
//#53    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
//#53    const [allMemes, setAllMemes] = React.useState(memesData)

    const [allMemes, setAllMemes] = React.useState([])      // Empty array is assumed as empty box that will filled with our memes as soon as our component loads ( and fetch() request downloads data ) for the first time
/*#63
    React.useEffect(() => {
        console.log("Effect function ran")

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())            //we take the response and parse to javascript object 
 //           .then(data => (data.data.memes))
 //           .then(data => (console.log(data)))
 //wrong!// but we can rewrite getMemeImage() function      .then(data => setAllMemes(data.data.memes)) 
               .then(data => setAllMemes(data.data.memes))
    }, []) 

#63*/
// With async/await it seems could be rewritten as follows:
/* 
    React.useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }, [])

but this will NOT work!
We have to rewrite our useEffect that fetches data using async/await as follows:
( useEffect cleanup function: https://scrimba.com/learn/learnreact/using-an-async-function-inside-useeffect-cw73rRud )
*/
    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
                                // if we'd put React.useEffect(async () => {}) what would be returned is a promise while
        return () => {          // this function is interpreted as a useEffect cleanup function so we have to wrap our async function inside
                                // another callback function as above.           
        }                       // In our case we won't need to be returning a cleanup function since we 're not setting up anything needs to be cleaned up
    }, [])

//  console.log(allMemes)
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value   // We use the computed property name in brackets [name]
        }))
    }

//#53      function getMemeImage() {
//#53         const memesArray = allMemeImages.data.memes
//#53         const randomNumber = Math.floor(Math.random() * memesArray.length)
//#53         const url = memesArray[randomNumber].url
//#53 //        setMemeImage(memesArray[randomNumber].url)
//#53         setMeme(prevMeme => ({
//#53             ...prevMeme,
//#53 //          topText: memesArray[randomNumber].name,
//#53 //          bottomText: "",
//#53             randomImage: url
//#53         }))
//#53         console.log(meme)       
//#53     }

    function getMemeImage() {
//      const memesArray = allMemes.data.memes          // because of we have imported only "memes" array ( when doing .then(data => setAllMemes(data.data.memes)) )
//        const memesArray = allMemes
//        const randomNumber = Math.floor(Math.random() * memesArray.length)
//        const url = memesArray[randomNumber].url     // we can get rid of memesArray and simply use allMemes in the following two lines:
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
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
