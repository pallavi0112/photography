import React from 'react'
import './footer.css'
import {AiOutlineYoutube , AiOutlineInstagram , AiOutlineCopyrightCircle} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <footer>
      <div className='footer-top'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Portfolio</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Blog</Link></li>
            <li><Link to='/'>Information</Link></li>
            <li><Link to='/'>Contact</Link></li>
          </ul>
      </div>
      <div className='footer-bottom'>
           <span>All content Copyright <AiOutlineCopyrightCircle/> 2023 CS Photography </span>
           <div className='social-media'>
                <Link><AiOutlineYoutube className='social-icons'/></Link>
                <Link><FaFacebookF className='social-icons'/></Link>
                <Link><AiOutlineInstagram className='social-icons'/></Link>
           </div>
      </div>
  </footer>
  )
}

export default Footer