import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UpdateEquipment = () => {
  const { id } = useParams(); // Get the equipment ID from the URL params
  const [product, setProduct] = useState(null); // State to store product details
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch product by ID
    fetch(`http://localhost:3000/update/id/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch product with ID: ${id}`);
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Destructure product details
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const deliveryTime = form.deliveryTime.value;
    const quantity = form.quantity.value;
    const uname = form.uname.value;
    const uemail = form.uemail.value;
    const newProduct = {
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
      uname,
      uemail,
    };


    // database 

     
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Name */}
          <div>
            <input
              type="text"
              placeholder="Product Name"
              name="name"
              defaultValue={name}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Image Link */}
          <div>
            <input
              type="text"
              placeholder="Enter the Image Link"
              name="image"
              defaultValue={image}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Category Name */}
          <div>
            <input
              type="text"
              placeholder="Category Name"
              name="category"
              defaultValue={category}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Description */}
          <div>
            <input
              type="text"
              placeholder="Product Description"
              name="description"
              defaultValue={description}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Product Price */}
          <div>
            <input
              type="number"
              placeholder="Product Price"
              name="price"
              defaultValue={price}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Product Rating */}
          <div>
            <input
              type="text"
              placeholder="Product Rating"
              name="rating"
              defaultValue={rating}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Product Delivery Time */}
          <div>
            <input
              type="text"
              placeholder="Product Delivery Time"
              name="deliveryTime"
              defaultValue={deliveryTime}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Product Customization */}
          <div>
            <input
              type="text"
              placeholder="Product Customization"
              name="customization"
              defaultValue={customization}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Product Stock */}
          <div>
            <input
              type="text"
              placeholder="Product Quantity"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* User Email */}
          <div>
            <input
              type="text"
              // placeholder="User Email"
              defaultValue={user.email}
              name="uemail"
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* User Name */}
          <div>
            <input
              type="text"
              defaultValue={user.displayName}
              name="uname"
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input type="submit" className="btn btn-primary " value="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default UpdateEquipment;
