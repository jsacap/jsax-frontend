import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const Menu = () => (
  <>
    <p><a href='#'>Home</a></p>
    <p><Link to='/blog'>Blog</Link></p>
    <p><a href='#'>Trader</a></p>
    <p><a href='#'>Investor</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='jsa__navbar'>
      <div className='jsa__navbar-links'>
        <div className='jsa__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
          <div className='jsa__navbar-links_container'>
            <Menu />
          </div>
      </div>
    <div className='jsa__navbar-sign'>
      <p>LOGIN</p>
      <button type='button'>Register</button>
    </div>
    <div className='jsa__navbar-menu'>
    {toggleMenu}
    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
    {toggleMenu && (
      <div className='jsa__navbar-menu_container scale-up-center'>
        <div className='jsa__navbar-menu_container-links'>
          <Menu />
          <div className='jsa__navbar-menu_container-links-sign'>
      <p>LOGIN</p>
      <button type='button'>Register</button>
    </div>
        </div>
      </div>
    )}
    </div>
    </div>
  )
}

export default Navbar