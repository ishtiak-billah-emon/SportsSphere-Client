import React from "react";

const ShowAProduct = ({ product }) => {
  const {
    _id,
    name,
    category,
    image,
    description,
    price,
    rating,
    customization,
    deliveryTime,
    quantity,
  } = product;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl my-12">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-bold">{name}</h2>
        <h4 className=" text-lg font-medium">Rating: {rating} </h4>
        <h3 className="text-xl font-semibold text-[#fc601d]">${price}</h3>
        <p className="text-lg font-medium ">Categories: {category}</p>
        <p className="text-[#838592">
          <span className="font-medium">Product Details: </span>
          {description}
        </p>
        <p className="text-[#838592">
          <span className="font-medium">Customization: </span> {customization}
        </p>
      </div>
    </div>
  );
};

export default ShowAProduct;
