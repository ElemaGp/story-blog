import './contact.css'
import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i4jc80n', 'template_v222ln8', form.current, 'UHHn2XFGfofTydRnZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <div className="our__contact">
      <h5>Our Contact</h5>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>elemagodspower@gmail.com</h5>
            <a href="mailto:elemagodspower@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>The Programmer</h5>
            <a href="https://m.me/elema.godspower" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+123456789" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact