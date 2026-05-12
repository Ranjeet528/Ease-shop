import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/Context";

export default function ProductCard({
  image,
  title,
  price,
  discount,
  id
}) {
  const discountedPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price;

    const {addToCart} = useContext(StoreContext);
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">

      {/* Product Image */}
      <div className="relative">
        <Link to={`/overview/${id}`} > <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
        </Link>
        

        {/* Discount Badge */}
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            ₹{discountedPrice}
          </span>

          {discount && (
            <span className="text-sm text-gray-500 line-through">
              ₹{price}
            </span>
          )}
        </div>

        {/* Button */}
        <button
          onClick={() => {
            addToCart(
              {
                image, 
                title, 
                price, 
                discount,
                id,
                qty: 1 
              }
            )
          }}
          className="mt-4 w-full bg-[green] text-white py-2 cursor-pointer rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition"
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}