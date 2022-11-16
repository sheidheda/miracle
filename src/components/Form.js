import { Button } from '@mui/material'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Form.css'

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mbyu2vr', 'template_maja', form.current, 'tf3XG62IbtMjsrHqJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <form ref={form} onSubmit={sendEmail} className='Form'>
        <div className="hhr">
          <span>
            <h3>Name:</h3>
            <input type="text" name="user_name" />
          </span>
            <hr />  
        </div>
        <div className="hhr">
          <span>
            <h3>Email:</h3>
            <input type="email" name="user_email" />
          </span>
            <hr />
        </div>
      <div className="hhr">
          <span>
            <h3>Message:</h3>
            <input type="text" name="message" />       
          </span>
            <hr /> 
      </div>
      <Button
      variant='contained'
      type="submit"
      sx={{marginLeft: '304px', marginTop: '30px', padding: '15px 10px 15px 10px', background: '#1ED700'
    }}
      >
        Send Message
      </Button>

    </form>
  )
}

export default Form
