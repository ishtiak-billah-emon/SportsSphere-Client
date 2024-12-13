import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
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
                <button className="btn join-item">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;