import React, { Fragment } from "react";
import InputPlayer from "./components/InputPlayer";
import ListPlayer from "./components/ListPlayer";
import AppSlashPlayer from "./components/AppSplashPlayer";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer";



function App() {
  
  return (
    
    <Fragment>
      
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<AppSlashPlayer/>}/>
          <Route index element={<AppSlashPlayer/>} />
          <Route path="/entryscreen" element={<InputPlayer />} />
          <Route path="/playaction" element={<Timer/>} />
         
      </Routes>
    </BrowserRouter>
    
    </Fragment>
  );
}

export default App;
