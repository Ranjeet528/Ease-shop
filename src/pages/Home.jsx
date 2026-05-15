import React from 'react'
import Hero from '../componants/Hero'
import Slider from '../componants/Slider';

export default function Home() {


  const products = [
  {
    id: 1,
    name: "Amul Taaza Toned Milk",
    qty: "500 ml",
    price: 30,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png",
  },
  {
    id: 2,
    name: "Lay's American Style Chips",
    qty: "52 g",
    price: 20,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1776240040304-421.png",
  },
  {
    id: 3,
    name: "Coca Cola Soft Drink",
    qty: "750 ml",
    price: 40,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1770356946958-190.png",
  },
  {
    id: 4,
    name: "Dairy Milk Silk Chocolate",
    qty: "150 g",
    price: 95,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1771395208762-1276.png",
  },
  {
    id: 5,
    name: "Fresh Banana",
    qty: "1 dozen",
    price: 60,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/72affebb-0553-40cb-a809-465c8d1ad51d.png",
  },
  {
    id: 6,
    name: "Brown Bread",
    qty: "400 g",
    price: 45,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0b267148-c2c6-4eae-9ecd-1e9a83569e3a.png",
  },
  {
    id: 7,
    name: "Farm Fresh Eggs",
    qty: "12 pcs",
    price: 90,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1770009938439-127.png",
  },
  {
    id: 8,
    name: "Red Apples",
    qty: "1 kg",
    price: 160,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1775039083845-599.png",
  },
  {
    id: 9,
    name: "Mixed Fruit Juice",
    qty: "1 L",
    price: 120,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1777953701494-14409.png",
  },
  {
    id: 10,
    name: "Chocolate Cookies",
    qty: "250 g",
    price: 85,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1776224489956-588.png",
  },
];

const snacksProducts = [
  {
    id: 1,
    name: "Doritos Nacho Chips",
    qty: "60 g",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Oreo Biscuits",
    qty: "120 g",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "KitKat Chocolate",
    qty: "4 fingers",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Coca Cola",
    qty: "750 ml",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Lay's Cream & Onion",
    qty: "52 g",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Hide & Seek Cookies",
    qty: "200 g",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Pepsi Soft Drink",
    qty: "1 L",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Pringles Original",
    qty: "110 g",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Sprite Bottle",
    qty: "750 ml",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Dark Fantasy Choco Fills",
    qty: "300 g",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?q=80&w=1200&auto=format&fit=crop",
  },
];

// ================= FRUITS =================

const fruitsProducts = [
  {
    id: 1,
    name: "Fresh Banana",
    qty: "1 dozen",
    price: 60,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/72affebb-0553-40cb-a809-465c8d1ad51d.png",
  },
  {
    id: 2,
    name: "Red Apples",
    qty: "1 kg",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Fresh Mango",
    qty: "1 kg",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Orange Imported",
    qty: "1 kg",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Fresh Grapes",
    qty: "500 g",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Pineapple",
    qty: "1 pc",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Watermelon",
    qty: "1 pc",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Papaya",
    qty: "1 kg",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Kiwi Fruit",
    qty: "3 pcs",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Strawberry Pack",
    qty: "250 g",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop",
  },
];


// ================= VEGETABLES =================

const vegetablesProducts = [
  {
    id: 1,
    name: "Fresh Tomato",
    qty: "1 kg",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Potato",
    qty: "1 kg",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Fresh Onion",
    qty: "1 kg",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Green Capsicum",
    qty: "500 g",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Fresh Carrot",
    qty: "500 g",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Broccoli",
    qty: "250 g",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Cauliflower",
    qty: "1 pc",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Cucumber",
    qty: "500 g",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Green Chilli",
    qty: "100 g",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Fresh Spinach",
    qty: "1 bunch",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1200&auto=format&fit=crop",
  },
];
// ================= ICE CREAMS & DESSERTS =================

const iceCreamProducts = [
  {
    id: 1,
    name: "Chocolate Ice Cream",
    qty: "700 ml",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Vanilla Cone",
    qty: "1 pc",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Strawberry Ice Cream",
    qty: "500 ml",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Kulfi Malai",
    qty: "2 pcs",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Butterscotch Tub",
    qty: "1 litre",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Chocolate Brownie",
    qty: "1 pc",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Red Velvet Pastry",
    qty: "1 pc",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Choco Lava Cake",
    qty: "1 pc",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Blueberry Cheesecake",
    qty: "500 g",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Mango Ice Candy",
    qty: "1 pc",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1200&auto=format&fit=crop",
  },
];


  return (
    <>
<Hero
  title="Welcome to Ease shop"
  subtitle="Up to 50% off on all products"
  image="https://images.unsplash.com/photo-1607082349566-187342175e2f"
  showButton={true}
  buttonText="Shop Now"
  onButtonClick={() => console.log("Go to shop")}
/>

 <Slider
     title=" Grocery & Essentials"
     products={products}
    />
    <Slider 
    title=" Snacks & Cold Drinks"
    products={snacksProducts}
    /> <Slider 
    title=" Fruits"
    products={fruitsProducts}
    /> <Slider 
    title=" Vegetables"
    products={vegetablesProducts}
    />
    <Slider
    title="Ice Creams & Desserts"
    products={iceCreamProducts}
    />
    </>



  )
}
