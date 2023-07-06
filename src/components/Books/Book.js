 
import './Book.css'
import * as React from 'react';
import Buybtn from './Buybtn';

 
const items = [
    {
        id: 1,
        image: 'https://drive.google.com/uc?export=view&id=1eSQDHtccv4MrFZ5EpTA80mWrCy6M87e5',
        title: 'A Royal Priesthood',
        price: 1000,
        link: 'https://paystack.com/buy/a-royal-priesthood-ttuibi'
    },
    {
        id: 2,
        image: 'https://drive.google.com/uc?export=view&id=1YPtToorbIZE7Kw1rcw2YVyM8h4jZr48_',
        title: 'Church Planting',
        price: 1000,
        link: 'https://paystack.com/buy/empowering-the-laity-for-aggressive-church-planting-a-yvokyo'
    },
    {
        id: 3,
        image: 'https://drive.google.com/uc?export=view&id=1eSQDHtccv4MrFZ5EpTA80mWrCy6M87e5',
        title: 'A Royal Priesthood',
        price: 1000,
        link: 'https://paystack.com/buy/a-royal-priesthood-ttuibi'
    },

]
function Book() {
    


  return (
    <div className='book'>
 
      <div className="bkcover1">
        {items.map((item)=>(
            <div className="bkcover2">
                <div>
                    <img src={item.image} alt=""  loading="lazy" />
                </div>
                <p>{item.title}</p>
                <p>Price: ₦ {item.price}</p>
                <Buybtn
                     link={item.link}
                />
                {/* <div className="bkbuttons">
                    <button id='i'>
                        Buy now
                    </button>
                    <button id='ii'>
                        Cart item
                    </button>
                    
                </div> */}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Book
