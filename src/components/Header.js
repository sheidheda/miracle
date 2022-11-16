import { Button } from '@mui/material'
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div className='header'>
        <div className="leftHead">
        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><img src="https://drive.google.com/uc?export=view&id=1F3VDQtHK8Yi-Ec_qu2MZI09zy8p0BK8R" alt="MA" className='ma--icon' /></Link>
        </div>
        <div className="midHead">
            <ul>
                <li id='i'><a href="#about" style={{ color: 'inherit', textDecoration: 'inherit'}}>About me</a></li>
                <li id='ii' className='publicationbtn'><Link to='/publications' style={{ color: 'inherit', textDecoration: 'inherit'}}>Publications</Link></li>
                <li id='iii'><a href="#contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact me</a></li>
            </ul>
        </div>
        <div className="rightHead">
            <Button 
            variant='contained'
            sx={{
            borderRadius: '30px', 
            height: '55px',
            width: '181px',
            left: '0px',
            top: '0px',
            padding: '12px 24px 12px 24px',
            backgroundColor: '#1ED700'
           
            }}
            component = {Link} to = '/bookstore'
            className='bkstorebtn'
            >
                <h5>Book store</h5>
            </Button>
            {/* <Button 
           
          sx={{position: 'relative'}}
          >
            <div className="cartbtn">
            <ShoppingCartOutlinedIcon
            fontSize='large'
            sx={{ 
              fontSize: '35px', 
              color: '#545454',
              
                }}
          
          /> 
          
          <div className='num'>3</div>    
            </div>

          </Button> */}
        </div>
    </div>
  )
}

export default Header