import React from 'react'
import './Photo.css'

function Photo(props) {
  return (
    <div className='photo'>
        <img src={props.url} alt="gallery-item" />
    </div>
  )
}

export default Photo