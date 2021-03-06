import React from "react";
import Photo from "../Photo/photo.component";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const mapStateToProps = (state) => {
  return {
    galleries: state.galleries,
    loading: state.loading,
  };
};

const ConnectedGallery = ({ galleries, loading }) => (
  <section className="gallery">
    {loading ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-light spinner-height" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      galleries.map((gal) => {
        return <Photo key={uuidv4()} details={gal} />;
      })
    )}
  </section>
);

const Gallery = connect(mapStateToProps)(ConnectedGallery);

export default Gallery;
