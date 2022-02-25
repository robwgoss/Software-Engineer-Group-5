import React, { useState, useEffect } from 'react';

//importing splash screen image
import SplashScreenImage from "./splashscreenlogo.jpg";

import './App.css';

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
<img src = {SplashScreenImage} width={window.innerWidth} height={window.outerHeight} isLoading={isLoading}className="App-SplashScreen" alt="SplashScreen" />:

//main page (player entry screen)
<h1 className="App">
  Player Entry Screen
</h1>
}

export default App;
