import React from 'react'
import Hero from '../componants/Hero'

export default function Home() {
  return (
<Hero
  title="Welcome to Ishop"
  subtitle="Up to 50% off on all products"
  image="https://images.unsplash.com/photo-1607082349566-187342175e2f"
  showButton={true}
  buttonText="Shop Now"
  onButtonClick={() => console.log("Go to shop")}
/>
  )
}
