import React, { Fragment } from "react";
import InputPlayer from "./components/InputPlayer";
import ListPlayer from "./components/ListPlayer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputPlayer />
        <ListPlayer />
      </div>
    </Fragment>
  );
}

export default App;
