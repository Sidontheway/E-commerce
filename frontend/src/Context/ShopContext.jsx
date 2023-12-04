import React, { createContext, useState } from 'react'
import all_products from  "../Components/Assests/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
 }

const ShopContextProvider = (props) =>{
    const [cartitems , setcartitems] = useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartitems);
    }

    
    const removeFromCart = (itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextvalue = {all_products , cartitems,addToCart,removeFromCart};


    return(
        <ShopContext.Provider value={ contextvalue }>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;