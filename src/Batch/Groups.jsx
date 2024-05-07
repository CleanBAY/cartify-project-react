import React from 'react'
import face from '/product-image-132752046.jpg'
import coffeeBag from '/coffee_leather_cat_bag_medium.jpg'
import gold from '/product-image-156013353.jpg'
import socks from '/product-image-38277183.jpg'

const Groups = () => {
  return (
    <div className='box-container'>
      <div className='parent'>
        <img src={face} alt="" />
        <div className='child'>
          <h4>CAT HOME DECOR</h4>
        </div>
      </div>

      <div className='parent'>
        <img src={coffeeBag} alt="" />
        <div className='child'>
          <h4>CAT BAG FOR ANY AND <br /> ALL OCCASION</h4>
        </div>
      </div>

      <div className='parent'>
        <img src={gold} alt="" />
        <div className='child'>
          <h4>GOLD COLLECTION</h4>
        </div>
      </div>

      <div className='parent'>
        <img src={socks} alt="" />
        <div className='child'>
          <h4>UNDER $10</h4>
        </div>
      </div>

    </div>
  )
}

export default Groups
