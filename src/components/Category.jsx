import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();

        // Filter to get distinct categories
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

  return (
    <div className="container mx-auto p-4 mb-12">
      <h2 className="text-2xl font-bold mb-4 text-center mt-12">Sports Equipment and Accessories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow hover:bg-gray-100 text-center text-lg font-medium"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
