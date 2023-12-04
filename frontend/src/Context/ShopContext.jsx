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
        setcartitems((prev)=>({...prev,[itemId]:(prev[itemId]+1)}));
        console.log(cartitems);
    }

    
    const removeFromCart = (itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{

        let totalAmount = 0;
        for (const item in cartitems) {
            if(cartitems[item]>0){
                let itemInfo = all_products.find((product)=>product.id === Number(item));
                console.log(itemInfo);
                totalAmount += (itemInfo.new_price * cartitems[item]);
            }
            return totalAmount;
        }
    }

    const contextvalue = {all_products , cartitems,addToCart,removeFromCart,getTotalCartAmount};


    return(
        <ShopContext.Provider value={ contextvalue }>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;