import React, { useEffect, useState } from "react";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";

function Modal({ photos, modalImgIndex, setModalImgIndex, setShowModal }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const img = photos.find((p, i) => i === modalImgIndex);
    setUrl(img.url);
  }, [modalImgIndex]);

  return (
    <div className="modal-backdrop">
      <div className="close-modal" onClick={() => setShowModal(false)}>
        <IoMdClose className="close-modal-icon" />
      </div>
      <div className="images">
        <div className="modal-main-img">
          <img src={url} alt="image-url" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
