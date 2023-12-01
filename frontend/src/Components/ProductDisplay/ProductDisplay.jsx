import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props
    return (
        <div className='productDisplay'>
            <div className="productdisplay_left">
                <div className="productdisplay_img_list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>

                <div className="productdisplay_img">
                    <img className='productdisplay_main_img' src={product.image} alt="" />
                </div>
            </div>

            <div className="productdisplay_right">
                <h1>{product.name}</h1>
                <div className="prodcutdisplay_right_star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay_right_prices">
                    <div className="productdisplay_right_price_old">
                        ${product.old_price}
                    </div>

                    <div className="productdisplay_right_price_new">
                        ${product.new_price}
                    </div>
                </div>

                <div className="productdisplay_right_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error at, nesciunt ad recusandae quibusdam aliquid dicta earum fugiat. Minus reprehenderit ipsam praesentium molestiae est officiis consequatur magnam illum veniam?
                </div>

                <div className="productdisplay_right_size_container">
                    <h1>Select Size</h1>
                    <div className="productdisplay_right_size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <button>ADD TO CART</button>
                <p className="productdisplay_right_category"><span>Category:</span>Women, T-Shirt ,Crop Top</p>
                <p className="productdisplay_right_category"><span>Tags:</span>Modern , Latest</p>
            </div>

        </div>
    )
}

export default ProductDisplay;