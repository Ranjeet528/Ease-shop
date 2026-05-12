import { useContext, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { FaBars, FaShoppingCart, FaUser, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../Context/Context";

export default function Header() {

  const {cart} = useContext(StoreContext);
    const location = useLocation();
    
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Store",
        path: "/store"
    },
    {
        title: "Contact",
        path: "/contact"
    }
     
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <h1 className="text-3xl font-bold text-[#0aa40a] cursor-pointer">
            ShopEase
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-[#0aa40a] text-white px-4 rounded-r-md">
            <FaSearch />
          </button>
        </div>
        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-700 mx-10">
           {
            items.map((item,index)=>{
                const active = location.pathname==item.path
                return (
           <Link key={index} to={item.path}> <li className={`${active ? "bg-green-500 text-white font-bold " : ""}cursor-pointer px-4 py-1 rounded-2xl` }>{item.title}</li>
               </Link>
          
        )


            })
          }

        </ul>

        
   
        {/* Icons */}
        <div className="flex items-center gap-1 text-lg text-gray-700">
          <FaUser className="cursor-pointer hover:text-black" />
          <a href="#" className="hover:text-black">Login</a>

         <Link to="/Cart">
         <div className="relative cursor-pointer pl-7 ">
            <FaShoppingCart className="hover:text-black text-3xl" />
            <span className="absolute -top-2 right-3 bg-red-500 text-white text-xs px-1 rounded-full">
              {cart.length ??  0}
            </span>
          </div>
         </Link>
          
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden px-4 pb-4">

    {items.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        onClick={() => setIsOpen(false)}  // 👈 menu close bhi hoga
        className="block py-2"
      >
        {item.title}
      </Link>
    ))}

    {/* Mobile Search */}
    <div className="mt-3 flex">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-3 py-2 border rounded-l-md"
      />
      <button className="bg-black text-white px-3 rounded-r-md">
        <FaSearch />
      </button>
    </div>

  </div>
)}
    </header>
  );
}