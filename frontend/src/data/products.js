// src/data/products.js
import mobileImg from "../assets/e1.jpg";
import samsungImg from "../assets/f1.jpg";
import ipadImg from "../assets/h1.jpg";

export const allProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 280000,
    image: mobileImg,
    description: "Latest iPhone with A16 chip and amazing camera.",
    colors: ["Black", "Silver", "Gold"],
    rating: 5,
    category: "Smartphones",
  },
  {
    id: 2,
    name: "Samsung S23 Ultra",
    brand: "Samsung",
    price: 250000,
    image: samsungImg,
    description: "High-end Samsung smartphone with S-Pen.",
    colors: ["Black", "Green", "White"],
    rating: 4,
    category: "Smartphones",
  },
  {
    id: 3,
    name: "iPad Pro",
    brand: "Apple",
    price: 180000,
    image: ipadImg,
    description: "Powerful iPad with M2 chip.",
    colors: ["Silver", "Space Gray"],
    rating: 5,
    category: "Tablets",
  },
];
