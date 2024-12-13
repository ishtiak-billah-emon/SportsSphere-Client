import React, { useContext } from "react";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../provider/AuthProvider";

const AddEquipment = () => {
  const {user} = useContext(AuthContext);

  const handleAddEquipment = (e) => {
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

    const product = {
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
      uemail
    };

    // add to the server
    fetch("http://localhost:3000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log("product send to server: ", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `The product "${name}" has been added successfully to the inventory.`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h2>Add Equipemt</h2>
      <form onSubmit={handleAddEquipment}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Name */}
          <div>
            <input
              type="text"
              placeholder="Product Name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Image Link */}
          <div>
            <input
              type="text"
              placeholder="Enter the Image Link"
              name="image"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Category Name */}
          <div>
            <input
              type="text"
              placeholder="Category Name"
              name="category"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Description */}
          <div>
            <input
              type="text"
              placeholder="Product Description"
              name="description"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Product Price */}
          <div>
            <input
              type="number"
              placeholder="Product Price"
              name="price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Product Rating */}
          <div>
            <input
              type="text"
              placeholder="Product Rating"
              name="rating"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Product Delivery Time */}
          <div>
            <input
              type="text"
              placeholder="Product Delivery Time"
              name="deliveryTime"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Product Customization */}
          <div>
            <input
              type="text"
              placeholder="Product Customization"
              name="customization"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Product Stock */}
          <div>
            <input
              type="text"
              placeholder="Product Quamtity"
              name="quantity"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* user email */}
          <div>
            <input
              type="text"
              // placeholder="Product Quamtity"
              defaultValue={user.email}
              name="uemail"
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* user Name */}
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

export default AddEquipment;
