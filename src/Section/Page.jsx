import React from 'react'
import dress from '/smartmockups_l682d58y_medium.jpg'
import shirt from '/Avocatdo_3_medium.png'
import top from '/smartmockups_l5f91mi6_medium.jpg'
import catImage from '/He06a789092964167b525521f4668ffca9_62b4ef9e-7bd2-4b44-8de4-6214a0c29944_medium.jpg'

const Page = () => {
    return (
        <div>
            <div className='container'>
                <div className='dress'>
                    <img src={dress} alt="" />
                    <p>Cat And Coffee Gal T-Shirt</p>
                    <h3>₦28,840.00 NGN</h3>
                </div>

                <div className='shirt'>
                    <img src={shirt} alt="" />
                    <p>Avocatdo T-Shirt</p>
                    <h3>₦28,840.00 NGN</h3>
                </div>

                <div className='shirt'>
                    <img src={top} alt="" />
                    <p>All I Need Is Books & Cats Shirt</p>
                    <h3>from ₦28,840.00 NGN</h3>
                </div>

                <div className='dress'>
                    <img src={catImage} alt="" />
                    <p>Cute Animal Welcome Home Mat</p>
                    <h3>₦18,209.00 NGN</h3>
                </div>
            </div>

            <a href="">
                <div className='class-btn'>
                    <p>VIEW ALL</p>
                </div>
            </a>
        </div>
    )
}

export default Page
