import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../State/Authentication/Action";
import { isPresentInFavorites } from "../config/logic";

function RestaurantCard({ item, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store || {});

  const handleAddToFavorites = () => {
    dispatch(addToFavorites({ restaurantId: item.id, jwt }));
  };

  const handleNavigateToRestaurant = () => {
    if (item.openNow) {
      navigate(
        `/restaurant/${item.address.city}/${item.restaurantName}/${item.id}`
      );
    }
  };

  return (
    <Card className="w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={item.images[0]}
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item.openNow ? "success" : "error"}
          label={item.openNow ? "open" : "closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <button onClick={handleNavigateToRestaurant} className="font-semibold text-lg cursor-pointer">{item.restaurantName}</button>
          <p className="text-gray-500 text-m">{item.description}</p>
        </div>
        <div>
          <IconButton onClick={handleAddToFavorites}>
            {auth?.favorites && isPresentInFavorites(auth.favorites, item) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

RestaurantCard.propTypes = {
  item: PropTypes.shape({
    restaurantName: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    openNow: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default RestaurantCard;
