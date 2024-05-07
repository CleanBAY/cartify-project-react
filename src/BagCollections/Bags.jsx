import React from 'react'
import { useState } from 'react'
import handBag from '/black_leather_cat_bag.jpg'
import girlBag from '/product-image_0d440a0f-4193-454f-a617-9e6e12a833f2_medium.jpg'
import catBag from '/product-image_eb8ddc0c-f77d-4c34-a5b5-a14c022ecf77_medium.jpg'
import fashionBag from '/product-image-81974655_medium.jpg'
import blackBag from '/product-image-435520704_medium.jpg'

const Bags = () => {
    return (
        <div className=''>
            <div className='container-store'>
                <div className='bagCollection'>
                    <img src={handBag} alt="" />
                    <p>Designer Leather Cat Ear & Whiskers...</p>

                    <div className='capital-letter'>
                        <h3>$ 36.99</h3>
                        <h4>from $ 11.99</h4>
                    </div>
                </div>

                <div className='bagCollection'>
                    <img src={girlBag} alt="" />
                    <p>Canvas Cat Handbag</p>
                    <div className='capital-letter'>
                        <h3>$ 13.99</h3>
                        <h4>from $ 11.99</h4>
                    </div>
                </div>

                <div className='bagCollection'>
                    <img src={catBag} alt="" />
                    <p>Cool Cat Messenger Bag</p>
                    <div className='capital-letter'>
                        <h3>$ 19.99</h3>
                        <h4>$ 13.99</h4>
                    </div>
                </div>

                <div className='bagCollection'>
                    <img src={fashionBag} alt="" />
                    <p>Stylish Cat Moon Leather Handbag</p>
                    <div className='capital-letter'>
                        <h3>$ 48.22</h3>
                        <h4>$ 34.99</h4>
                    </div>
                </div>

                <div className='bagCollection'>
                    <img src={blackBag} alt="" />
                    <p>Cat Whiskers Wings Leather Handba...</p>
                    <div className='capital-letter'>
                        <h3>$ 49.99</h3>
                        <h4>$ 34.99</h4>
                    </div>
                </div>
            </div>

            <div className='boder'>
                <p><a href="">VIEW ALL</a></p>
            </div>

        </div>
    )
}

export default Bags
