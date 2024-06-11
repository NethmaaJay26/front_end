import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/Allproducts";

export const ShopContext = createContext(null);

const getdefaultcart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{


    const [cartitems,setcartitems]=useState(getdefaultcart());
    

    const addtocart =(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartitems);

    }
    const removefromcart =(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}));

    }
    const gettotalcart = ()=>{
        let totalamount=0;
        for(const item in cartitems){
            if (cartitems[item]>0) 
                {
                    let iteminfo =all_product.find((product)=>product.id===Number(item))
                    totalamount +=iteminfo.price *cartitems[item];
            }
            
        }
        return totalamount;
    }
    const gettotalcartitems =()=>{
        let totalitem = 0;
        for(const item in cartitems)
            {
                if(cartitems[item]>0){
                    totalitem+=cartitems[item];
                }
            }
            return totalitem;

    }
    

    const contextValue = {gettotalcartitems, gettotalcart, all_product,cartitems,addtocart,removefromcart};

    
    return(
           <ShopContext.Provider value={contextValue}>
                {props.children}
           </ShopContext.Provider>
    )

}
export default ShopContextProvider;