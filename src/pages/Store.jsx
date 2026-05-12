import React, { useEffect, useState } from 'react'
import Hero from '../componants/Hero'
import axios from 'axios'
import ProductCard from '../componants/ProductCard'
import { Link, useParams } from 'react-router-dom'
import ProductSkelton from '../componants/ProductSkelton'

export default function Store() {
  const { slug } = useParams();

  const [products, setproducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(30);
  const [loading, setloading] = useState(true);

  function getProducts() {
    let API = `https://dummyjson.com/products?limit=${limit}`;

    if (slug != null) {
      API = `https://dummyjson.com/products/category/${slug}`;
    }

    setloading(true);

    axios.get(API)
      .then((response) => {
        setproducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  }

  function getCategories() {
    axios.get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch(() => {
        setCategories([]);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [slug, limit]);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Welcome to Ishop store"
        subtitle="Discover premium products at unbeatable prices."
        image="public/pexels-karola-g-5632402.jpg"
        showButton={true}
        buttonText="Shop Now"
        onButtonClick={() => console.log("Go to shop")}
      />

      {/* Main Layout */}
      <div className="max-w-full grid grid-cols-1 md:grid-cols-5">

        {/* Sidebar */}
        <div className="md:col-span-1">

          <ul className="flex md:block overflow-x-auto md:overflow-visible px-2">

            {/* All */}
            <Link to="/store">
              <li
                className={`${slug == null ? "bg-green-900" : "bg-green-400 hover:bg-green-900"} whitespace-nowrap mx-2 my-3 px-4 py-2 rounded-2xl text-white cursor-pointer`}
              >
                All
              </li>
            </Link>

            {/* Categories */}
            {
              categories.map((item) => (
                <Link key={item.slug} to={`/store/${item.slug}`}>
                  <li
                    className={`${slug == item.slug ? "bg-green-900" : "bg-green-400 hover:bg-green-900"} whitespace-nowrap mx-2 my-3 px-4 py-2 rounded-2xl text-white cursor-pointer`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))
            }

          </ul>
        </div>

        {/* Products */}
        <div className="md:col-span-4">

          <div className="px-4 md:px-6 py-6 md:py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* Limit Select */}
            <select
              className="col-span-full w-full md:w-40 border px-2 py-1 rounded"
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="30">30</option>
              <option value="60">60</option>
              <option value="90">90</option>
              <option value="120">120</option>
              <option value="150">150</option>
              <option value="180">180</option>
              <option value="200">200</option>
            </select>

            {/* Products / Skeleton */}
            {
              loading
                ? [1,2,3,4,5,6,7,8].map((item) => (
                    <ProductSkelton key={item} />
                  ))
                : products.map((prod) => (
                    <ProductCard
                      key={prod.id}
                      id={prod.id}
                      image={prod.thumbnail}
                      title={prod.title}
                      price={prod.price}
                      discount={prod.discountPercentage}
                    />
                  ))
            }

          </div>
        </div>

      </div>
    </>
  );
}