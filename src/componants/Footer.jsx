import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200 mt-16">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + DESC */}
        <div>
          <h2 className="text-3xl font-bold text-green-600">
           Shop Ease
          </h2>

          <p className="text-gray-600 mt-4 leading-7 text-sm">
            Your one-stop online shopping destination for groceries,
            snacks, beauty products, and daily essentials delivered
            quickly to your doorstep.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6">

            <div className="bg-white border border-gray-200 p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer shadow-sm">
              <FaFacebookF />
            </div>

            <div className="bg-white border border-gray-200 p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer shadow-sm">
              <FaInstagram />
            </div>

            <div className="bg-white border border-gray-200 p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer shadow-sm">
              <FaTwitter />
            </div>

            <div className="bg-white border border-gray-200 p-3 rounded-full text-gray-700 hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer shadow-sm">
              <FaYoutube />
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-gray-900">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-600">

            <li>
              <Link
                to="/"
                className="hover:text-green-600 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-green-600 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/store"
                className="hover:text-green-600 transition"
              >
                Store
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-green-600 transition"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-gray-900">
            Categories
          </h3>

          <ul className="space-y-3 text-gray-600">

            <li className="hover:text-green-600 transition cursor-pointer">
              Fruits & Vegetables
            </li>

            <li className="hover:text-green-600 transition cursor-pointer">
              Snacks & Drinks
            </li>

            <li className="hover:text-green-600 transition cursor-pointer">
              Dairy Products
            </li>

            <li className="hover:text-green-600 transition cursor-pointer">
              Beauty & Personal Care
            </li>

          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-gray-900">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-600 text-sm">

            <p>
              📍 Jaipur, Rajasthan, India
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <p>
              ✉️ support@shopease.com
            </p>

            <p>
              🕒 24/7 Customer Support
            </p>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-gray-500 text-sm text-center">
            © 2026 Ease Shop. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-500">

            <p className="hover:text-green-600 transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-green-600 transition cursor-pointer">
              Terms & Conditions
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}