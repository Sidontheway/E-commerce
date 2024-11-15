import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import logo from '../Assests/logo.png'
import cart_item from '../Assests/cart_icon.png'

const Navbar = () => {
  const [menu, setmenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
	  <Link to = "/" style = {{display:"flex",textDecoration:"none"}}
        <img src={logo} alt="" />
        <p>SHOPPER</p>
	  </Link>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => { setmenu("shop") }}>
          <Link to="/" style={{textDecoration:'none'}}>Shop</Link>
          {menu == "shop" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setmenu("mens") }}>
          <Link to="/mens" style={{textDecoration:'none'}}>Mens</Link>
          {menu == "mens" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setmenu("women") }}>
          <Link to="/womens" style={ { textDecoration:'none'} }>Women</Link>
          {menu == "women" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setmenu("kids") }}>
          <Link to="/kids" style={{ textDecoration:'none'}}>Kids</Link>
          {menu == "kids" ? <hr /> : <></>}
        </li>

      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to = "cart"><img src={cart_item} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;
