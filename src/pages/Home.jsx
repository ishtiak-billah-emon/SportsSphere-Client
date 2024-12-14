import React, { useState } from "react";
import Slider from "../components/Slider";
import ProfessionalEquipment from "../components/ProfessionalEquipment";
import Category from "../components/Category";
import ShowProducts from "../components/ShowProducts";
import Events from "../components/Events";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <Slider />

      {/* Category */}
      <Category onSelectCategory={setSelectedCategory} />

      {/* Products */}
      <ShowProducts selectedCategory={selectedCategory} />

      {/* Another section */}
      <ProfessionalEquipment />

      <Events></Events>
    </div>
  );
};

export default Home;
