import React, { useState } from 'react'
import logo from '../Asset/logo.png';
import contac_logo from '../Asset/Contact.png'
import menu_logo from '../Asset/menu1.png'
import { Link } from 'react-scroll';
import './Navbar.css'


const Navbar = () => {

  //const form = useRef();
  const [showMenu,setShowMenu] = useState(false);

  return (
    <nav className="navbar">
        <img src={logo} alt='Logo' className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>My Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link>
        </div>

        <button className="desktopMenuBtn"
        onClick={()=> {document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>
            <img src={contac_logo} alt='Contact' className='desktopMenuImg'/>
            Contact Me
        </button>

        <img src={menu_logo} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style = {{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>My Projects</Link>
            
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            
        </div>
    </nav>
  )
}

export default Navbar
