import React from 'react'
import "./about.css"
import ME from '../assets/me-about.jpg'
import {AiOutlineStar,AiOutlineUsergroupAdd,AiOutlineFolderView} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} className="about__me-image" alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineStar className='about__icon'/>
              <h5>Experience</h5>
              <small>+3 years experience.</small>
              
            </article>
            <article className="about__card">
              <AiOutlineUsergroupAdd className='about__icon'/>
              <h5>Users</h5>
              <small>more than 300.000 users.</small>
              
            </article>
            <article className="about__card">
              <AiOutlineFolderView className='about__icon'/>
              <h5>Projects</h5>
              <small>+80 projects completed</small>
              
            </article>
          
            
            
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut velit nemo eos, qui laudantium, soluta earum harum sunt fuga, porro eligendi ab. Odit excepturi voluptatem expedita praesentium, molestiae repellendus.</p>
            <a href="#contact" className='btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About