import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ProductCard = ({ product, setProduct, products }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
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
    <div>
      <div className="card card-side bg-base-100 shadow-xl space-x-12 flex">
        <figure className="h-96 w-96 object-cover">
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl">{rating}</h2>
          <h2 className="text-5xl font-bold">{name}</h2>
          <h3 className="text-3xl font-semibold text-[#fc601d]">${price}</h3>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">{category}</p>
            <p className="text-[#838592">{description}</p>
            <p className="text-[#838592">
              Available Customization: {customization}
            </p>
          </div>
          <div>
            <div className="join">
              <div className="join join-vertical lg:join-horizontal">
                <button
                  onClick={() => navigate(`/update/id/${_id}`)}
                  className="btn join-item"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn join-item"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
