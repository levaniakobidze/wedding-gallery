import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'
function Navbar() {
    const [activeMenu,setActiveMenu] = useState(true);
  return (
    <nav className='navbar'>   
        <div className='logo-cont'>
          <h1 className='logo'>LogOherE</h1>
        </div>
        <RxHamburgerMenu className='burger-menu' onClick={() => setActiveMenu(!activeMenu)} />
        <ul className={activeMenu ? 'nav-menu' : 'nav-menu nav-menu-active'}>
            <div className="close-menu-cont">
                 <IoMdClose className='burger-menu' onClick={() => setActiveMenu(!activeMenu)} />
            </div>
            <li onClick={() => setActiveMenu(true)}><Link to='/'>GALLERY</Link></li>
            <span className='dot'>o</span>
            {/* <li><Link to='/'>WEDDING STORIES</Link></li>
            <span className='dot'>o</span>
            <li><Link to='/'>ABOUT</Link></li>
            <span className='dot'>o</span> */}
            <li onClick={() => setActiveMenu(true)}><Link to='/contact'>CONTACT</Link></li>
        </ul>        
     </nav>
  )
}

export default Navbar