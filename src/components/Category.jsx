import React, { useEffect, useState } from "react";

const Category = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null); // State for active category

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
        const distinctCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(distinctCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Set the clicked category as active
    onSelectCategory(category); // Notify parent of the selected category
  };

  return (
    <div className="container mx-auto p-4 mb-12">
      <h2 className="text-2xl font-bold mb-4 text-center mt-12">
        Sports Equipment and Accessories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`p-4 border rounded-lg shadow text-center text-lg font-medium cursor-pointer ${
              activeCategory === category
                ? "bg-blue-500 text-white" // Active background and text color
                : "hover:bg-gray-100" // Default hover state
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
