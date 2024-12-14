import React from "react";
import { useNavigate } from "react-router-dom";

const ShowAProduct = ({ product }) => {
  const navigate = useNavigate();
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
    <>
      <div className="card bg-base-100 w-96 shadow-xl group relative">
        <figure className="px-10 pt-10">
          <img src={image} alt="product" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Rating: {rating}</p>
          <p className="text-lg font-semibold text-[#fc601d] group-hover:hidden">
            ${price}
          </p>
        </div>
        {/* Button */}
        <div className="card-actions w-full absolute bottom-4 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => navigate(`/product/id/${product._id}`)}
            className="btn bg-[#fc601d] text-white font-bold w-11/12 mx-auto"
          >
            Details
          </button>
        </div>
      </div>

      {/* <div className="card card-compact bg-base-100 w-96 shadow-xl my-12">
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
      </div> */}
    </>
  );
};

export default ShowAProduct;
