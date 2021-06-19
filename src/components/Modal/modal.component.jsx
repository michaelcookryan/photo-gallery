import React from "react";

export default function Modal({ details }) {
  return (
    <div
      className="modal fade"
      id={`staticBackdrop-${details.url.slice(-4)}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <img src={details.url} alt="" />
          </div>
          <div className="modal-footer">
            <h5 className="modal-title" id="staticBackdropLabel">
              {details.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
