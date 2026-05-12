import React from "react";

 export default function About () {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <div className="bg-green-600 text-white text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          About ShopEase
        </h1>
        <p className="text-sm md:text-lg max-w-2xl mx-auto">
          Your one-stop destination for quality products at unbeatable prices.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          alt="about"
          className="rounded-xl shadow-md"
        />

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            ShopEase is a modern ecommerce platform built to provide customers 
            with a seamless shopping experience. We focus on quality, affordability, 
            and fast delivery.
          </p>

          <p className="text-gray-600">
            Whether you're looking for electronics, fashion, or daily essentials, 
            we bring everything to your fingertips.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We ensure top-notch quality for all our products.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery at your doorstep.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl">
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with amazing deals.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src="https://img.magnific.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="font-bold">John Doe</h3>
            <p className="text-gray-500">Founder</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrr4NC44AfoJuznCENmipMGvWup8FQxKz7gPPpKLPlIDg8C0P_Kf8Xy8A&s"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="font-bold">Jane Smith</h3>
            <p className="text-gray-500">Designer</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQPPt-ZGYH6B6SL9U-m1rFc21N4pOLLEL3Q&s"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="font-bold">Alex Lee</h3>
            <p className="text-gray-500">Developer</p>
          </div>

        </div>
      </div>

    </div>
  );
};

