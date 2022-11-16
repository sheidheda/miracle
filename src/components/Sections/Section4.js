import React from 'react'
import Book from '../Books/Book'
import './Section4.css'
import { Link } from 'react-router-dom';

function Section4() {
  return (
    <div className='section4'>
        <h1>Featured Books</h1>
        <Book />
        <div className="findout">

            <p id="ome">
            Find out what else Miracle Ajah has written.
            </p>
            
            <Link to='/bookstore'>
              <button>
                Find more books  
              </button>  
            </Link>
            
            

        </div>
    </div>
  )
}

export default Section4