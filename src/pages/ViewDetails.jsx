import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product by ID
    fetch(`http://localhost:3000/product/id/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);
  console.log(product);
  if (!product) {
    return <div>Loading...</div>;
  }
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
  const filledStars = Math.floor(rating); 
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#403F3F]  mt-12 mb-4">
        Product Details
      </h2>
      <div className="card card-side bg-base-100 shadow-xl space-x-12 mt-12">
        <figure className="h-96 w-full object-cover">
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body space-y-4">
          <div className="rating rating-lg rating-half">
            {Array(filledStars)
              .fill()
              .map((_, index) => (
                <input
                  key={`filled-${index}`}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
              ))}
          </div>
          <h2 className="text-4xl font-bold">{name}</h2>
          <h3 className="text-2xl font-semibold text-[#fc601d]">${price}</h3>
          <div className="flex flex-col gap-4">
            <p className="text-xl text-[#403F3F]  font-medium">
              {" "}
              Category: {category}
            </p>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-base-300 bg-base-200 border"
            >
              <div className="collapse-title text-xl font-medium">
                Description
              </div>
              <div className="collapse-content">
                <p>{description}</p>
              </div>
            </div>
            <p className="text-[#838592">
              <span className="text-[#403F3F] text-lg font-medium">
                Available Customization:
              </span>{" "}
              {customization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
