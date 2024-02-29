import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const offer = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>check now</button>

        </div>
        <div className='offers-right'>
            <img src='exclusive image' alt=''/>

        </div>

    </div>
  )
}
export default Offer
