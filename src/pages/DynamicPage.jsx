import React, { useContext, useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
import axios from 'axios'
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { StoreContext } from '../Context/Context';

export default function DynamicPage() {

  const {addToCart}=useContext(StoreContext)

  const {id}= useParams()
   const [product, setproducts]=useState({})
    function getProducts(){
        axios.get(`https://dummyjson.com/products/${id}`).then(
            (response)=>{
              setproducts(response.data)
                

            }
        ).catch(
            (error)=>{
                setproducts({})

            }
        )
    }
    useEffect(
        ()=>{
             getProducts()
        },
        [id]
    )

  return (
     <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-10">

        {/* LEFT - IMAGE */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-80 h-80 object-contain"
            />
          </div>

          {/* small image preview */}
          <div className="flex gap-3 mt-4">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="preview"
                className="w-16 h-16 object-cover rounded-md border cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-2">{product.brand}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium">
              {product.rating} / 5
            </span>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-3xl font-bold text-black">
              ₹{product.discountedPrice}
            </span>

            <span className="text-lg text-gray-400 line-through">
              ₹{product.price}
            </span>

            <span className="text-green-600 font-semibold">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Info Box */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button onClick={() => {
  addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail
  })
}}className="flex-1 bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button className="flex-1 border border-black py-3 rounded-lg hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

        {product.reviews?.map((review, index) => (
          <div key={index} className="border-b py-3">
            <p className="font-semibold">{review.reviewerName}</p>
            <p className="text-sm text-gray-500">
              ⭐ {review.rating}
            </p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}





