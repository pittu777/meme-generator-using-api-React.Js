import React from "react";
import memeData from "../memeData";
function Meme(){
    
    
    
    const [meme, setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"})
    const[allMemeImage, setAllMemeImage]=React.useState(memeData)
    function getMemeImage(){
            
            const memesArray=allMemeImage.data.memes
            const randomNumber=Math.floor(Math.random()*memesArray.length)
            const url=memesArray[randomNumber].url
            setMeme(prv=>{
                return{
                    ...prv,
                    randomImage:url
                }
            })

    }
    function handleChange(event){
        const {name, value}=event.target
        setMeme((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })

    }
    return(
        <main>
            
            <div className="form">
                <input type="text"
                name="topText" 
                onChange={handleChange}
                value={meme.topText}
                placeholder="Top text"
                className="form--inputs"/>
                <input type="text" 
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
                placeholder="Bottom text"
                className="form--inputs"/>
                <button className="form--button" onClick={getMemeImage}>Get New Meme Image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
           
        </main>
    )
}
export default Meme;