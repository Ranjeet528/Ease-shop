import React, { createContext, useState } from 'react'

const StoreContext = createContext();

export default function Context({children}) {

const [cart, setCart]=useState([]);

function addToCart(payload){

  const isProductExist = cart.find((item)=> item.id == payload.id);
  
  if(isProductExist){
    
    const items = cart.map((item)=>{
      return item.id === payload.id ? {...item, qty: item.qty+1} : item
    })
    setCart(items)

  }
  else{
     setCart([...cart, payload])

  }

  
 
 
}
function removeCartItem(id){
     const items = cart.filter((item)=>{
      return item.id !== id
    })
    setCart(items)
  }
  function changeQty(flag,id){
    const isProductExist = cart.find((item)=> item.id == id);
  
  if(isProductExist){

    const items =  flag == "dec" ?
    
    cart.map((item)=>{
      return item.id === id ? {...item, qty: item.qty + 1} : item
    }): cart.map((item)=>{
      return item.id === id && item.qty > 1  ? {...item, qty: item.qty - 1} : item
    })
    setCart(items)

  }
}

const cartTotal = cart.length > 0
? cart.reduce((sum, item)=> sum + (item.qty * item.price),0): 0;

  return (
    <StoreContext.Provider value={{addToCart,cart,removeCartItem,changeQty,cartTotal}}>
        {children}
    </StoreContext.Provider>
  )
}
  export {StoreContext};

