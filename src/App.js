import React from "react";
import Header from "./components/Header";
import "./style.css"
import memeData from "./memeData";
import Meme from "./components/Meme";
function App(){
    
    return(
        <div>
        <Header />
        <Meme />
        </div>
    )
}
export default App;