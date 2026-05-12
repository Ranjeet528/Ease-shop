import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">ShopEase</h2>
          <p className="text-sm">
            Your one-stop shop for all your needs. Quality products, best prices, fast delivery.
            Secure payments and 24/7 support.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" >Home</a></li>
            <li><a href="#" >Shop</a></li>
            <li><a href="#" >Categories</a></li>
            <li><a href="#" >Deals</a></li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" >Contact Us</a></li>
            <li><a href="#" >Returns</a></li>
            <li><a href="#" >Shipping</a></li>
            <li><a href="#" >FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to get updates on offers and new arrivals.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-black"
            />
            <button className="bg-yellow-500 px-4 rounded-r-md text-black font-semibold">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}