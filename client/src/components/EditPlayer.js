import React, { Fragment, useState } from "react";

const EditPlayer = ({ player }) => {
  //editText function

  const editText = async (id, player_status) => {
    try {
      const body = {id, first_name, last_name, codename, status : player_status };

      //proxy
      const res = await fetch(`/players/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [id, setId] = useState(player.id)
  const [first_name, setFirst_name] = useState(player.first_name);
  const [last_name, setLast_name] = useState(player.last_name);
  const [codename, setCodename] = useState(player.codename);
 
  if(player.status === 'red'){
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
                onClick={() => editText(player.id, 'red')}
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
}else if(player.status === 'green'){
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
            <input
                type="text"
                placeholder="Add ID"
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.id)}
            />
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
                onClick={() => editText(player.id, 'green')}
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
