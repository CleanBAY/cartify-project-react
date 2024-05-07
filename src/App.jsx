import './App.css'
import Header from './HeaderBar/Header'

import React from 'react'
import Pixel from './ImageFolder/Pixel'
import Line from './Component/Line'
import Page from './Section/Page'
import Bags from './BagCollections/Bags'
import Groups from './Batch/Groups'
import Footer from './FooterPage/Footer'

const App = () => {
  return (
    <div>
      <nav className='header'>
        <div className='one'>
          <p>Expect 2 - 3 week Delivery</p>
        </div>

        <div className='head'>
          <p>Login</p>
          <p>Register</p>
        </div>
      </nav>

      <div className='image'>
        <img src="https://www.catify.co/cdn/shop/files/Catify_logo_purple_140x@2x.png?v=1613690576" alt="" />
      </div>

      <div>
        <Header />
      </div>

      <Line text={'BEST SELLER'} />

      <div className='pixel'>
        <Pixel />
      </div>

      <Line text={'NEW PRODUCT'} />

      <div className='pixel'>
        <Page />
      </div>

      <Line text={'BEAUTIFUL CAT BAGS'} />

      <div className='pixe'>
        <Bags />
      </div>

      <div className='margin-top'>
        <p>Collection List</p>
        <Groups />
      </div>

      <div className='footer'>
        <h1>Cat Themed Gifts from Catify Co</h1>
        <div className='first'>
          <p>
            Thank you for visiting us! We love sharing the passion of cats to the world through our cat lovers accessories, home cat decor and cat themed clothing . These are great items for cat <br />
            owners, cat lovers and more. These can be great cat themed gifts for others or yourself. From a community that adores cats we are here to take care of all your feline needs. Shop now <br />
            and check out our great selection and don't forget to follow us to get exclusive deals and offers!
          </p>
        </div>
        <div className='second'>
          <p>
            We have a wide selection of items that are going to make your day that much better. Our hope is that these items be gifts for yourself or someone you like. It delights us whenever we <br />
            see other smile, whether it's because they think the cat sweater they got was adorable or if they found the perfect cat themed gift for a crazy cat lady.
          </p>
        </div>
        <div className='second'>
          <p>
            In addition to providing quality products we have the best customer service. We are available for direct contact on our Facebook and Instagram or give us a mail through our contact <br />
            form. Whether this is a question about a product or need help picking out a gift for other cat lovers, or something in between. Need to just chat about kitties? Give us an email, we'll <br />
            respond and let you know how we feel!
          </p>
        </div>
        <div className='second'>
          <p>We also have a great selection accessories especially cat pins!</p>
        </div>
      </div>

      <div className='namedFooter'>
        <Footer />
      </div>
    </div>
  )
}

export default App

