import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container-wrapper'>
    <div className='navbar-container'>
        <div className='navbar-menu navbar-menu-split-left'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Portfolio</Link></li>
            <li><Link to='/'>About</Link></li>
          </ul>
        </div>
        <Link to='/'><img/></Link>
        <div className='navbar-menu navbar-menu-split-right'>
          <ul>
            <li><Link to='/'>Blog</Link></li>
            <li><Link to='/'>Information</Link></li>
            <li><Link to='/'>Contact</Link></li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar