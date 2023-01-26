import React from "react";
import Modal from "../../components/Modal/Modal";
import PhotosList from "../../components/PhotosList/PhotosList";
import "./Gallery.css";

function Gallery({
  photos,
  showModal,
  setShowModal,
  modalImgIndex,
  setModalImgIndex,
  loading,
  setLoading,
}) {
  return (
    <div className="gallery">
      {loading && (
        <div className="load-cont">
          <div class="load"></div>
        </div>
      )}
      <PhotosList
        photos={photos}
        showModal={showModal}
        setShowModal={setShowModal}
        modalImgIndex={modalImgIndex}
        setModalImgIndex={setModalImgIndex}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default Gallery;
