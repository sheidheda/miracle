import React from 'react'
import './Footer.css'
import Form from './Form'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { WhatsApp } from '@mui/icons-material';


function Footer() {
  return (
    <div className='footer' id='contact'>
      <div className="footitem1">
         <h1>Contact Me</h1>
      </div>
      <div className="instadem">
        <h2>Follow me on</h2>
        <ul>
            <li><a  href='https://web.facebook.com/miracle.ajah' style={{ color: 'inherit', textDecoration: 'inherit'}}target = '_blank' rel="noreferrer">
              <FacebookIcon />
            </a>
            </li>
            <li><a  href='https://twitter.com/MiracleAjah1?s=20&t=5ZgQFt5Z-PQ870oGFRlgBw' style={{ color: 'inherit', textDecoration: 'inherit'}}target = '_blank' rel="noreferrer">
              <TwitterIcon />
            </a>
            </li>
            <li><a  href="https://api.whatsapp.com/send?phone=2348060340312&text=Hello,%20I'm%20here%20from%20your%20website" style={{ color: 'inherit', textDecoration: 'inherit'}}target = '_blank' rel="noreferrer">
              <WhatsApp />
            </a>  
            </li>
        </ul>
      </div>
      <div className="footform">
        <Form />
      </div>
    </div>
  )
}

export default Footer
