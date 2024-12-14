import React from 'react';
import Slider from '../components/Slider';
import ProfessionalEquipment from '../components/ProfessionalEquipment';
import Category from '../components/Category';
import ShowProducts from '../components/ShowProducts';

const Home = () => {
  return (
    <div>
      <Slider/>

      {/* Category */}
      <Category></Category>

      {/* product */}

      <ShowProducts></ShowProducts>

      {/* Another section */}
      <ProfessionalEquipment/>
    </div>
  );
};

export default Home;