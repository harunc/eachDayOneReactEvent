import React from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineStar,AiOutlineFileDone,AiOutlineContacts} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import { useState } from 'react'
const Nav = () => {
  const [active, setactive] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setactive("#") } className={active === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setactive("#about") }className={active === "#about" ? "active" : ""}><SiAboutdotme/></a>
      <a href="#experience" onClick={()=>setactive("#experience") }className={active === "#experience" ? "active" : ""}><AiOutlineStar/></a>
      <a href="#services" onClick={()=>setactive("#services") }className={active === "#services" ? "active" : ""}><AiOutlineFileDone/></a>
      <a href="#contact" onClick={()=>setactive("#contact") }className={active === "#contact" ? "active" : ""}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav