import React from 'react'
import './ReletedProdutcs.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const ReletedProdutcs = () => {
  return (
    <div className='reletedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="reletedproducts-item">
      {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
      })}
      </div>
    </div>
  )
}

export default ReletedProdutcs