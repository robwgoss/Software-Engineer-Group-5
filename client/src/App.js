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
          <Route path="/" element={<Timer />}/>
          <Route index element={<Timer/>} />
          <Route path="/entryscreen" element={<AppSlashPlayer/>} />
         
      </Routes>
    </BrowserRouter>
    
    </Fragment>
  );
}

export default App;
