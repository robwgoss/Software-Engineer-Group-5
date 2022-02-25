import React, { Fragment } from "react";
import InputPlayer from "./components/InputPlayer";
import ListPlayer from "./components/ListPlayer";
import AppSlashPlayer from "./components/AppSplashPlayer";
import "./App.css";



function App() {
  
  return (
    
    <Fragment>
      <div className="container">
        <AppSlashPlayer/>
        <InputPlayer />
        <ListPlayer />
      </div>
    </Fragment>
  );
}

export default App;
