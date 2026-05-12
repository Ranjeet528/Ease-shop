import React, { useContext } from 'react'
import { StoreContext } from '../Context/Context';

export default function Cart() {


  const {cart,removeCartItem,changeQty,cartTotal}= useContext(StoreContext);
  
 
 
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white p-4 md:p-6 rounded-xl shadow">

        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Shopping Cart
        </h2>
        
        {cart.map((item)=>{
          return(
             <div key={item.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b pb-4 mb-4">

          {/* Left */}
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-base md:text-lg font-medium">
                {item.title}
              </h3>
              <p className="text-green-600 font-semibold">
                ${item.price}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">

            {/* Quantity Buttons */}
            <div className="flex items-center border rounded overflow-hidden">
              <button onClick={()=>changeQty("inc",item.id)} className="px-3 py-1 bg-gray-200">-</button>
              <span className="px-4">{item.qty}</span>
              <button onClick={()=>changeQty("dec",item.id)} className="px-3 py-1 bg-gray-200">+</button>
            </div>

            {/* Total */}
            <p className="font-semibold text-sm md:text-base">
              ${item.price * item.qty}
            </p>

            {/* Remove */}
            <button onClick={()=>removeCartItem(item.id)} className="bg-red-500 text-white px-3 py-1 text-sm md:text-base rounded hover:bg-red-600">
              Remove
            </button>

          </div>
        </div>

          )

        })}

        {/* Cart Item */}
       

       

        {/* Total + Checkout */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <h3 className="text-lg md:text-xl font-bold text-right md:text-left">
            Total: ${cartTotal}
          </h3>

          <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            Checkout
          </button>

        </div>

      </div>
    </div>
  );
};





  
