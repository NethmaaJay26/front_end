import React from 'react'
import './Banner.css'
import leaf from '../Assets/leaf.png'
import arrow from '../Assets/arrow.png'
import banner0 from '../Assets/ban.jpg'

const Banner = () => {
  
  return (
    <div className='banner'>
      <div className="banner-left">
        <h2>Fresh Arrivals Just for You</h2>
        <div>
          <div className="home-banner">
                <p>Discover</p>
                <img src={leaf} alt=""/>
          </div>
          <p>Our Latest</p>
          <p>Tea Collections</p>
        </div>
        <div className="latest-button">
             <div>Explore New Products</div>
             <img src={arrow} alt=""/>
        </div>
      </div>
      
      <div className="banner-right">
        <img src={banner0} alt=''/>
      </div>
    </div>
  )
}
export default Banner