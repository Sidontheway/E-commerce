import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'

const CartItems = () => {
    const { all_products, cartitems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems_format_main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {
                all_products.map((e) => {
                    if (cartitems[e.id] > 0) {
                        return (
                            <div>
                                <div className=" cartitems_format_main cartitems_format">
                                    <img src= {e.image} alt="" className='carticon_product_icon' />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartitems_quantity'>{cartitems[e.id]}</button>
                                    <p>${e.new_price * cartitems[e.id]}</p>
                                    <img src={remove_icon} className='cartitems_remove_icon' onClick={() => { removeFromCart(e.id) }} alt="" />
                                </div>
                            </div>
                        )
                    }
                    return null;
                })
            }

            <div className="cartitems_down">
                <div className="cartitems_total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems_total_item">
                            <p>SubTotal</p>
                            <p>${0}</p>
                        </div>

                        <hr />
                        <div className="caritems_total_item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>

                        <hr />

                        <div className="cartitems_total_item">
                            <h3>Total</h3>
                            <h3>${0}</h3>
                        </div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>

                <div className="cartitems_promocode">
                    <p>If you have promocode , enter it here</p>
                    <div className="cartitems_promobox">
                        <input type="text" placeholder='Promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;