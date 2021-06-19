import React from "react";

export default function Photo({ details }) {
  return (
    <div className="image-container">
      {/* //   <img src={details.thumbnailUrl} alt="" />
    //   </div> */}

      <input
        type="image"
        src={details.thumbnailUrl}
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdrop-${details.url.slice(-4)}`}
      />

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
            <div className="modal-header">
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
            <div className="modal-body">
              <img src={details.url} alt="" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
