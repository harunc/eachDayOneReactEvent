import React from 'react'
import "./footer.css"
import {AiOutlineTwitter,AiOutlineInstagram,AiOutlineFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Portfo</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://facebook.com"><AiOutlineFacebook/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Harun Çifci. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer