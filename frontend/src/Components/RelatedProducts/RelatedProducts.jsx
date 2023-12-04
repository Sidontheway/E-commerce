import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assests/data'
import Items from '../Items/Items'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts_item">
            {
                data_product.map((items , i)=>{
                    return <Items key = {i} id = {items.id} name = {items.name} image = {items.image} old_price = {items.old_price} new_price = {items.new_price}/>
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts;