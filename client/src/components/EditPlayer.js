import React, { Fragment, useState } from "react";

const EditTodo = ({ player }) => {
  //editText function

  const editText = async (id) => {
    try {
      const body = { first_name };

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

  const [first_name, setFirst_name] = useState(player.first_name);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
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

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
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
};

export default EditTodo;
