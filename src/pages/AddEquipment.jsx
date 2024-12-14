import React, { useContext, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); 

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
      uemail,
    };

    // Add to the server
    fetch("http://localhost:3000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `The product "${name}" has been added successfully to the inventory.`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
       
      })
      .catch((error) => {
       
        Swal.fire({
          title: "Error!",
          text: `There was an issue adding the product. Please try again later.`,
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };



  return (
    <div className="border boder-[#e0e0e1] p-12 rounded-xl my-12">
      <h2 className="font-bold text-2xl text-[#403F3F] mb-4 ">Add Products</h2>
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
              placeholder="Product Quantity"
              name="quantity"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* user email */}
          <div>
            <input
              type="text"
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
          <div>
            <input
              type="submit"
              className="btn btn-primary text-white  w-2/3"
              value="Add Product"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
