import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>

        <div className="footer__container">

        <div className="footer__centered">

        <a href="#" className='footer__logo'>STORYBLOG</a>

        <div className="footer__socials">
            <a href='https://facebook.com' target="_blank">  <ImFacebook2 /> </a>
            <a href='https://instagram.com' target="_blank"> <BsInstagram /> </a>
            <a href='https://twitter.com' target="_blank"> <FiTwitter /> </a>
        </div>

        <small>&copy; copyright 2022</small>
        
        </div>

        <div className="footer__contact">
            <a href="/contact">Contact us</a>
        </div>
        </div>

    </footer>
  )
}

export default Footer

