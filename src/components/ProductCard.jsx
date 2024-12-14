import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../pages/Loading";
const ProductCard = ({ product, setProduct, products }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success",
              });
              const remaining = products.filter((item) => item._id !== _id);
              setProduct(remaining);
            }
            // console.log(data);
          });
      }
    });
  };

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
        <div className="card-actions justify-center mt-4">
          <div className="join">
            <div className="join join-vertical lg:join-horizontal">
              <button
                onClick={() => navigate(`/update/id/${_id}`)}
                className="btn join-item btn-info"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
