import React from 'react'
import Modal from '../../components/Modal/Modal'
import PhotosList from '../../components/PhotosList/PhotosList'
import './Gallery.css'

function Gallery({photos,showModal,setShowModal,modalImgIndex,setModalImgIndex}) {
  console.log(modalImgIndex);
  return (
    <div className='gallery'>
    <PhotosList 
    photos={photos}
    showModal={showModal}
    setShowModal={setShowModal}
    modalImgIndex={modalImgIndex}
    setModalImgIndex={setModalImgIndex}
    />
    </div>
  )
}

export default Gallery