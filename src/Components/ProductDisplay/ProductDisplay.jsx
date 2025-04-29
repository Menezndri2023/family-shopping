import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_doll_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

      const {product} = props;
      const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
            <div className="display-img-list">
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
            </div>
            <div className="display-img">
                  <img className='display-main-img' src={product.image} alt="" />
            </div>
      </div>
      <div className="productdisplay-right">
            <h1>{product.name}</h1>
      <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_doll_icon} alt="" />
            <p>(122)</p>
      </div>
      <div className="display-right-price">
            <div className="display-right-price-old">${product.old_price}</div>
            <div className="display-right-price-new">${product.new_price}</div>
      </div>
      <div className="display-right-desc">
      A lightweight, usually knitted, pullover made to move with you. Soft, breathable, and effortlessly stylish, it's the perfect 
      companion for every season. Whether you're out for a casual brunch or relaxing at home, this essential piece brings comfort 
      and sophistication to your everyday look. Make it yours — and redefine comfort in style.
      </div>
      <div className="display-right-size">
            <h1>Select Size</h1>
      <div className="display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>     
      </div>
      </div>
       <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
       <p className='display-right-category'><span>Category:</span> Women , T-Shirt, Crop-Top</p>
       <p className='display-right-category'><span>Tags:</span> Modern , Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay