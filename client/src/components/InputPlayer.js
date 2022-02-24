import React, { Fragment, useState } from "react";

const InputPlayer = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [codename, setCodename] = useState("");

  const [first_nameGreen, setFirst_nameGreen] = useState("");
  const [last_nameGreen, setLast_nameGreen] = useState("");
  const [codenameGreen, setCodenameGreen] = useState("");


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { first_name,last_name,codename };
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://localhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also holding the restful api

      //https://pern-player-app-demo.herokuapp.com/players
      const response = await fetch("/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitFormGreen = async (e) => {
    e.preventDefault();
    try {
      const body = { first_nameGreen,last_nameGreen,codenameGreen };
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://localhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also holding the restful api

      //https://pern-player-app-demo.herokuapp.com/players
      const response = await fetch("/playersGreen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div class="row">
      <div class="col bg-danger text-white"><h1 className="text-left my-5 ">Input Player (RED TEAM)</h1>
     
     <form className="d-flex" onSubmit={onSubmitForm}>
    
       <input
         type="text"
         placeholder="Add First Name"
         className="form-control"
         value={first_name}
         onChange={(e) => setFirst_name(e.target.value)}
       />
       <input
         type="text"
         placeholder="Add Last Name"
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
       <button className="btn btn-success" >Add</button>
     </form></div>
      
      
     <div class="col bg-success text-white"><h1 className="text-right my-5 ">Input Player (Green TEAM)</h1>
     
     <form className="d-flex" onSubmit={onSubmitFormGreen}>
    
       <input
         type="text"
         placeholder="Add First Name"
         className="form-control"
         value={first_nameGreen}
         onChange={(e) => setFirst_nameGreen(e.target.value)}
       />
       <input
         type="text"
         placeholder="Add Last Name"
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
       <button className="btn btn-dark">Add</button>
     </form></div>
      
      </div>
      
    </Fragment>
  );
};

export default InputPlayer;
