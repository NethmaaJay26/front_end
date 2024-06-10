import React from 'react'
import './Productdisplay.css'
import star from '../Assets/star.jpg'
import star2 from '../Assets/star2.jpg'

 const Productdisplay = (props) => {
    const {product} =props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-image">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
    
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star2} alt="" />
            <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">${product.price}

            </div>
            <div className="productdisplay-right-description">
            The primary ingredient is black tea leaves, sometimes blended with additional natural flavors, spices, or dried fruits for enhanced taste.
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span> Black Tea,Tea bags </p>

        </div>
    </div> 
  ) 
} 
export default Productdisplay