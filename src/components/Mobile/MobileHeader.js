import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import './MobileHeader.css'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


function MobileHeader() {
  const [open, setOpen] = useState(false)
  
  function isOpen() {
    setOpen(prevState => !prevState)
  }

  return (
    <div>
      <div className='mHeader'>
        <div className="mLeftHead">
          <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}><img src="https://drive.google.com/uc?export=view&id=1F3VDQtHK8Yi-Ec_qu2MZI09zy8p0BK8R" alt="MA" className='ma--icon' loading="lazy" /></Link>
        </div>
        {/* <div className="midHead">
            <ul>
                <li id='i'><a href="#about" style={{ color: 'inherit', textDecoration: 'inherit'}}>About me</a></li>
                <li id='ii' className='publicationbtn'><Link to='/publications' style={{ color: 'inherit', textDecoration: 'inherit'}}>Publications</Link></li>
                <li id='iii'><a href="#contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact me</a></li>
            </ul>
        </div> */}
        <div className="mRightHead">
          <Button onClick={isOpen}
            variant='outlined'
            sx={{
              borderRadius: '0.5rem',
              border: '1px solid var(--secondaryblue, #C7E0FF)',

              /* Shadow/xs */
              boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              // display: 'flex',
              // padding: '0.5rem',
              // justifyContent: 'center',
              // alignItems: 'center',
              // gap: '0.5rem'
            }}
            className='bkstorebtn' 
          >
            {isOpen? <MenuOpenIcon/> : <MenuIcon /> }
          </Button>
        </div>
      </div>
      <h1>lets get started</h1>
    </div>
  )
}

export default MobileHeader