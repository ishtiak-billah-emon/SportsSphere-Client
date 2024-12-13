import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product by ID
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) =>  res.json())
      .then(data => setProduct(data))
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

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4">Product Details</h2>
      <div className="card card-side bg-base-100 shadow-xl space-x-12">
        <figure className='h-96 w-96 object-cover'>
          <img src={image} alt="Movie" />
         </figure>
        <div className="card-body">
          <h2 className="text-5xl font-bold">{name}</h2>
          <h3 className="text-3xl font-semibold text-[#fc601d]">${price}</h3>
          <div className='flex flex-col gap-4'>
            <p className="text-xl font-medium">{category}</p>
            <p className="text-[#838592">{description}</p>
            <p className="text-[#838592">Available Customization: {customization}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;