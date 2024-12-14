import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllEquipment = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const navigate = useNavigate();

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };
  return (
    <>
      <div className="flex justify-between mt-12">
        <h2 className="text-2xl text-center font-bold text-[#403F3F] my-12 ">
          Product List
        </h2>
        <div className="w-1/12">
          <button
            onClick={handleSort}
            className="btn text-white bg-[#195cca] w-full"
          >
            {" "}
            Sort
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>RATING</th>
              <th>STOCK</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.quantity}</td>
                <th>
                  <button
                    onClick={() => navigate(`/product/id/${product._id}`)}
                    className="btn btn-ghost btn-xs"
                  >
                    view details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllEquipment;
