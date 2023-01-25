import React from 'react'
import './Contact.css'
import phone from '../../assets/phone.jpeg'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-cont'>
            <div className='contact-img'>
                <img src={phone} alt="phone" />
            </div>
            <div className='contacts'>
                   <a className='social' href='https://www.instagram.com/mateweddings/'>
                    <FaFacebookF className='icon' />
                        <p>Facebook</p>
                    </a>   
                  <a className='social' href='https://www.instagram.com/mateweddings/'>
                    <AiOutlineInstagram className='icon' />
                        <p>Instagram</p>
                    </a>   
                    <a className='social' href='https://www.instagram.com/mate.mateshvili/'>
                    <AiOutlineInstagram className='icon' />
                        <p>Instagram</p>
                    </a>
                    <div className='social'>
                      <AiOutlinePhone className='icon' />
                      <p>+995 558 288 226</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact