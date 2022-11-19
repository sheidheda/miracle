import { Button } from '@mui/material'
import React from 'react'
import './Section2.css'
import { Link } from 'react-router-dom';


function Section2() {
  return (
    <div className='section2'>
      <div className="s2-item1">
        <img src="https://drive.google.com/uc?export=view&id=1KEZaKcT37rFD0w6PCMdOCTWPIJcnjWQM" alt="" loading="lazy"/>
      </div>
      <div className="s2-item2">
          <h1>A ROYAL PRIESTHOOD</h1>
          <p>Ebook is currently available on the book store</p>
          <Button
          
          component = {Link} to = '/bookstore'
          variant='contained'
          sx={{borderRadius: '30px', background: '#1ED700', padding: ' 10px 20px 10px 20px'}}
          >
            Shop now
          </Button>

      </div>
    </div>
  )
}

export default Section2
