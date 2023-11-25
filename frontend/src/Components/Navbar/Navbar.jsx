import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assests/logo.png'
import cart_item from '../Assests/cart_icon.png'

const Navbar = () =>{
  const [menu , setmenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}>Shop {menu == "shop" ? <hr/>:<></>}</li>
        <li onClick={()=>{setmenu("menu")}}>Men {menu == "menu" ? <hr/>:<></>}</li>
        <li onClick={()=>{setmenu("women")}}>Women {menu == "women" ? <hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}>Kids {menu == "kids" ? <hr/>:<></>}</li> 
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_item} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;