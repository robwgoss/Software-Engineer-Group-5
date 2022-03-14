import React, { Fragment, useState } from "react";
import ListPlayers from "./ListPlayer";
import '../App.css';
import './timer.css';
import { useNavigate } from "react-router-dom";

const InputPlayer = () => {
  let navigate = useNavigate();
  const [id, setId] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [codename, setCodename] = useState("");

  const [id_green, setId_green] = useState("");
  const [first_nameGreen, setFirst_nameGreen] = useState("");
  const [last_nameGreen, setLast_nameGreen] = useState("");
  const [codenameGreen, setCodenameGreen] = useState("");


  const onSubmitForm = async (event, id, first_name, last_name, codename, playerStatus) => {
    event.preventDefault();
  
    try {
      const body = {id,first_name,last_name,codename, 'status' : playerStatus};
      
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://localhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also holding the restful api

      //https://pern-player-app-demo.herokuapp.com/players

      const idtaken = await fetch('/check_id/'+id, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
      });

      let jsonData = await idtaken.json();
      if(jsonData.id_exists === "True"){
        if(jsonData.status === 'inactive') await fetch(`players/${id}`,{method: "DELETE"});
        else {
          alert("ID is already taken!");
          return;
        }
      }

      const response = await fetch("/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
      
      );
      window.location = "/entryscreen";
      
     
    
    } catch (err) {
      console.error(err.message);
    }
  };

  const routeChangeToPlayAction = ()=>{


    navigate("/playaction");

}
 
const routeChangeToSplashScreen = ()=>{


  navigate("/");

}
  return (
   


    <Fragment>

<div className = "container">
  <div style={{display:"flex"}}>
  <button onClick = {routeChangeToSplashScreen} class="next round" style={{marginLeft:"1%"}}>&laquo;Show Logo Screen</button>
  
    <h1 style={{textAlign:"center",marginLeft:"19%",color:"orange", textShadow:"2px 2px red"}}>
      Player Entry Screen
    </h1>
      <button onClick = {routeChangeToPlayAction} class="next round" style={{marginLeft:"15%"}}>Play Action Screen (Key F5)&#8250;</button>
  
  </div>
      <div class="row">
      <div class="col bg-danger text-white"><h1 className="text-left my-5 ">Input Player (RED TEAM)</h1>
     
     
     <form className="d-flex flex-column" onSubmit={(e) => onSubmitForm(e, id, first_name, last_name, codename, 'red')} >
       <input
           type="number"
           placeholder="Add ID"
           className="form-control"
           value={id}
           onChange={(e) => setId(e.target.value)}
       />
       <input
         type="text"
         placeholder="Add First Name (Optional)"
         className="form-control"
         value={first_name}
         onChange={(e) => setFirst_name(e.target.value)}
       />
       <input
         type="text"
         placeholder="Add Last Name (Optional)"
         className="form-control"
         value={last_name}
         onChange={(e) => setLast_name(e.target.value)}
       />
       <input
         type="text"
         placeholder="Add Codename"
         className="form-control"
         value={codename}
         onChange={(e) => setCodename(e.target.value)}
       />
       <button className="btn btn-info" >Add</button>
     </form></div>
      
      
     <div class="col bg-success text-white"><h1 className="text-right my-5 ">Input Player (Green TEAM)</h1>
     
     <form className="d-flex flex-column" onSubmit={(e) => onSubmitForm(e, id_green, first_nameGreen, last_nameGreen, codenameGreen, 'green')}>
       <input
           type="number"
           placeholder="Add ID (Integer)"
           className="form-control"
           value={id_green}
           onChange={(e) => setId_green(e.target.value)}
       />
       <input
         type="text"
         placeholder="Add First Name (Optional)"
         className="form-control"
         value={first_nameGreen}
         onChange={(e) => setFirst_nameGreen(e.target.value)}
       />
       <input
         type="text"
         placeholder="Add Last Name (Optional)"
         className="form-control"
         value={last_nameGreen}
         onChange={(e) => setLast_nameGreen(e.target.value)}
       />
       <input
         type="text"
         placeholder="Add Codename"
         className="form-control"
         value={codenameGreen}
         onChange={(e) => setCodenameGreen(e.target.value)}
       />
       <button className="btn btn-info">Add</button>
     </form></div>
      
      </div>
      <ListPlayers />
      </div>
    </Fragment>
  );
};

export default InputPlayer;
