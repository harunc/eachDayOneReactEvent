import React from 'react'
import "./contact.css"
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wa2hhmf', 'template_kkcfway', form.current, 'd51emOWjBZDOojq0a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hcifci99@gmail.com</h5>
            <a href="mailto:hcifci99@gmail.com" target="_blank">Send a Mail</a>

          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Message me</h5>
            <a href="https://facebook.com" target="_blank">Send a Mail</a>

          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Text Me</h5>
            <a href="https://api.whatsapp.com/send?phone+905312757228" target="_blank">Send a Mail</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" placeholder='Your Message' rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact