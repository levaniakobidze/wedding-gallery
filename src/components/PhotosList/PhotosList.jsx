import React from 'react'
import Modal from '../Modal/Modal'
import Photo from '../Photo/Photo'
import './PhotosList.css'

function PhotosList({photos,showModal,setShowModal,modalImgIndex,setModalImgIndex}) {
  const handlePhotoClick = (index) => {
    setShowModal((prev) => !prev)
    setModalImgIndex(index)
  }
  return (
    <div className='photosList'>
       {photos && 
       photos.map((photo,index) => (
         <Photo key={photo._id}
          url={photo.url}
          index={index}
          handlePhotoClick={handlePhotoClick}
          modalImgIndex={modalImgIndex}
          setModalImgIndex={setModalImgIndex}
           />

          )
       )
      }
      {showModal && <Modal 
          modalImgIndex={modalImgIndex}
          setModalImgIndex={setModalImgIndex} 
          photos={photos}
          setShowModal={setShowModal}
          />}
    </div>
  )
}

export default PhotosList