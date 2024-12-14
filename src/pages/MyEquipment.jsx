import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";
import ProductCard from "../components/ProductCard";
import banner from "../assets/NoEquipment.png";

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/product/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const formattedData = Array.isArray(data) ? data : [data];
          setEquipments(formattedData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching equipment:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  if (equipments.length === 0) {
    return (
      <>
        <div className="flex justify-center mt-12">
          <img className="h-96 w-1/2" src={banner} alt="No equipment found" />
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {equipments.map((equipment) => (
          // <li key={equipment._id}>{equipment.name}</li>
          <ProductCard
            key={equipment._id}
            product={equipment}
            setProduct={setEquipments}
            products={equipments}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
