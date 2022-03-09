import React, { useState, useEffect } from 'react';

//importing splash screen image
import SplashScreenImage from "../splashscreenlogo.jpg";

import '../App.css';
import InputPlayer from "./InputPlayer";
import ListPlayer from "./ListPlayer";

const App = () => {
  
  //loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
  }, []);

return isLoading ?

//display splash screen image for 3 seconds
<img src = {SplashScreenImage} width={window.innerWidth/2} height={window.outerHeight/1.1} isLoading={isLoading}class="center" alt="SplashScreen" />:

//main page (player entry screen)
  <>
    
    <div className = "container"><h1 style={{textAlign:"center"}}>
      Player Entry Screen
    </h1><InputPlayer /><ListPlayer /></div></>
}

export default App;
