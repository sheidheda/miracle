import React from 'react'
import Header from '../Header'

import './PublicationPage.css'

import Publication from './Publication'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import cv from '../../Assets/cv.pdf'
function PublicationPage() {
  return (
    <div className='publPage'>

        <div className="pubCover1">
            
            <Header />

            <video src="https://drive.google.com/uc?export=view&id=1XbXUMRaO6wu1OD0RJAmvltIiUC8taevS" autoPlay loop muted />
            <div className="pubtitledem">
                <img src="https://drive.google.com/uc?export=view&id=13hW_V-IV_JEIZkSbTjtKsIhD762_WJ_8" alt="" />
                <p>These publications are the result of my interest in theological studies and the desire to expose the shortcomings of our religious system in order to nurture a more progressive Christian community.</p>
            </div>
        </div>
        <div className="pubCover2">
            <Publication />
            
        </div>
        <div className="pubCover3">

        <div className="findout2">
            <p id="meme">
            for more information about me and my works get a copy of my CV
            </p>
            <a href={cv} download="Miracle Ajah's CV" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <button>
              Download CV  <FileDownloadOutlinedIcon />
            </button> 
            </a>
        </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2022 MiracleAjah.com. All rights reserved.</p>
        </div>
    </div>
  )
}

export default PublicationPage