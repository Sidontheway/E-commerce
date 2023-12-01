import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assests/dropdown_icon.png'
import Items from '../Components/Items/Items'

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)
  return (
    <div className='shop_category'>
      <img className = "shop_category_banner" src={props.banner} alt="" />

      <div className="shopcategory_indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div>

      <div className="shopcategory_products">
        {
          all_products.map((items, i) => {
            if (props.category === items.category)
              return <Items key={i} id={items.id} name={items.name} image={items.image} old_price={items.old_price} new_price={items.new_price} />
          })
        }
      </div>

      <div className="shopcategory_loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;