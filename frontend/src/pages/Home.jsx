import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Banner */}
      <Banner />

      {/* Categories with Old/New toggle */}
      <Categories />

      {/* Featured Products */}
      <FeaturedProducts />
    </div>
  );
}
