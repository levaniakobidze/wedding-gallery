import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'
function Navbar() {
    const [activeMenu,setActiveMenu] = useState(false);
  return (
    <nav className='navbar'>   
        <div className='logo-cont'>
           <img src="https://static-cdn5.vigbo.tech/u3789/2340/logo/u-c6fb3e87da99dc2ca1f471f032edcf74.jpg?v=46.637" alt="" />
        </div>
        <RxHamburgerMenu className='burger-menu' onClick={() => setActiveMenu(!activeMenu)} />
        <ul className={activeMenu ? 'nav-menu' : 'nav-menu nav-menu-active'}>
            <div className="close-menu-cont">
                 <IoMdClose className='burger-menu' onClick={() => setActiveMenu(!activeMenu)} />
            </div>
            <li><Link to='/'>GALLERY</Link></li>
            <span className='dot'>o</span>
            <li><Link to='/'>WEDDING STORIES</Link></li>
            <span className='dot'>o</span>
            <li><Link to='/'>ABOUT</Link></li>
            <span className='dot'>o</span>
            <li><Link to='/'>CONTACT</Link></li>
        </ul>        
     </nav>
  )
}

export default Navbar