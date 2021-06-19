import React from "react";
import Modal from "../Modal/modal.component";

export default function Photo({ details }) {
  return (
    <div className="image-container">
      <input
        type="image"
        src={details.thumbnailUrl}
        alt={details.title}
        data-bs-toggle="modal"
        title={details.title}
        data-bs-target={`#staticBackdrop-${details.url.slice(-4)}`}
      />

      <Modal details={details} />
    </div>
  );
}
