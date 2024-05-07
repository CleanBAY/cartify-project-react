import React from 'react'
import logo from '/Avocatdo_1_medium.png'
import spiralRing from '/Spiral_Cat_Ring_medium.jpg'
import star from '/Stars.png'
import leatherBag from '/black_leather_cat_bag_medium.jpg'
import jean from '/product-image-1305441641_medium.jpg'
import sweather from '/Screen_Shot_2017-09-09_at_10.46.56_AM_medium.png'

const Pixel = ({ ring, words, price }) => {
  return (
    <div className='container'>
      <div className='letter'>
        <img src={spiralRing} alt="" />
        <p>Sterling Silver Spiral Cat Ring</p>
        <h3>₦24,284.00 NGN</h3>
        <div id='image'>
          <img src={star} alt="" />
        </div>
      </div>

      <div className='word'>
        <img src={leatherBag} alt="" />
        <p>Designer Leather Cat Ear & Whisker Backp</p>
        <div className='price'>
          <h3>₦56,177.00 NGN</h3>
          <h4>₦50,102.00 NGN</h4>
        </div>

        <div id='image2'>
          <img src={star} alt="" />
        </div>
      </div>

      <div className='jean'>
        <img src={jean} alt="" />
        <p>Cat Face Jeans</p>
        <div className='price'>
          <h3>₦50,467.00 NGN</h3>
          <h4>from ₦47,065.00</h4>
        </div>
        <h5>NGN</h5>

        <div id='image3'>
          <img src={star} alt="" />
        </div>
      </div>

      <div className='sweather'>
        <img src={sweather} alt="" />
        <p>Black Cat Two Tone Sweatshirt</p>
        <div className='price'>
          <h3>₦57,802.00 NGN</h3>
          <h4>₦50,102.00 NGN</h4>
        </div>

        <div id='image4'>
          <img src={star} alt="" />
        </div>

        <a href="">
          <div className='btn-tag'>
            <p>VIEW ALL</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Pixel
