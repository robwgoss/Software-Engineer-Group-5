import React, { Fragment, useState } from "react";

const EditPlayer = ({ player }) => {
  //editText function
console.log(player);
  const editText = async (id) => {
    try {
      const body = { first_name, last_name, codename };

      //proxy
      if(player.hasOwnProperty('teamcolorgreen')){
      const res = await fetch(`/playersGreen/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }else if(player.hasOwnProperty('teamcolorred')){
      const res = await fetch(`/players/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  
  const [first_name, setFirst_name] = useState(player.first_name);
  const [last_name, setLast_name] = useState(player.last_name);
  const [codename, setCodename] = useState(player.codename);
 
  if(player.hasOwnProperty('teamcolorred')){
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${player.id}`}
      >
        Edit
      </button>
      {/* id = "id21"*/}
      <div
        class="modal"
        id={`id${player.id}`}
        onClick={() => setFirst_name(player.first_name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Player</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setFirst_name(player.first_name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={codename}
                onChange={(e) => setCodename(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={() => editText(player.id)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFirst_name(player.first_name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}else if(player.hasOwnProperty('teamcolorgreen')){
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#idgreen${player.idgreen}`}
      >
        Edit
      </button>
      {/* id = "id21"*/}
      <div
        class="modal"
        id={`idgreen${player.idgreen}`}
        onClick={() => setFirst_name(player.first_name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Player</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setFirst_name(player.first_name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={codename}
                onChange={(e) => setCodename(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={() => editText(player.idgreen)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFirst_name(player.first_name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
};

export default EditPlayer;
