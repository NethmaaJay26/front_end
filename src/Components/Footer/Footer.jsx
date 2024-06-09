import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import insta_logo from '../Assets/insta.png'
import fb_logo from '../Assets/fb.png'
import wa_logo from '../Assets/wa.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt=""/>

        </div>
        <ul className='footer-links'>
            <li>Customer Care</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Stores</li>
            <li>Stay in touch</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta_logo} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={fb_logo} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={wa_logo} alt=""/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All rights reserved</p>
        </div>


    </div>
  )
}
export default Footer