import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//importing splash screen image
import SplashScreenImage from "../splashscreenlogo.jpg";

import '../App.css';


const App = () => {
  const navigate = useNavigate();
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
    
    {navigate("/entryscreen")}</>
}

export default App;
