import React from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";


const Favorites = () => {
  const { auth } = useSelector((store) => store);
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {auth?.favorites?.map((item) => (item?
          <RestaurantCard key={item.id} item={item} />:null
        ))}
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  item: PropTypes.shape({
    restaurantName: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    openNow: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Favorites;
