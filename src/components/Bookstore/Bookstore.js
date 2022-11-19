import React from 'react'
import Book from '../Books/Book'
import Header from '../Header'
import './Bookstore.css'


function Bookstore() {
  return (
    <div className='bookstore'>
        <div className="bscover1">
            <Header />
            <img src="https://drive.google.com/uc?export=view&id=1MB19oxjer8S9KgfulGIUpG3f1d_oNcEo" alt="" className='bsimg' loading="lazy"/>  
        </div>
        <div className="bkstorebooks">
            <Book />

        </div>
        <div className="bscover2">
            <p>For update on my next book pubication subscribe to my newsletter </p>
            <div className="bscover3">

                <input type="text" placeholder='Enter Email' />
                <button>
                Subscribe 
                </button> 
            </div>
        </div>
 
    </div>
  )
}

export default Bookstore