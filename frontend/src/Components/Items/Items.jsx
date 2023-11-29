import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='item'>
        <img src= {props.image} alt="" />
        <p>{props.name}</p>

        <div className='items_prices'>
            <div className='price_new'>
                ${props.new_price}
            </div>

            <div className="price_old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Items;