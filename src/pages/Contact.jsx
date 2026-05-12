import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

 export default function Contact() {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <div className="bg-green-600 text-white text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-sm md:text-lg max-w-xl mx-auto">
          We'd love to hear from you. Get in touch with us anytime.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6">
            Send a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-md focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-md focus:outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border px-4 py-2 rounded-md focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <FaPhoneAlt className="text-green-600 text-xl" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <FaEnvelope className="text-green-600 text-xl" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">support@shopease.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Jaipur, Rajasthan, India</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

