import {
  Divider,
  FormControl,
  Grid,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById } from "../State/Restaurant/Action";

const foodCategories = [
  "pizza",
  "Bityani",
  "Burger",
  "Chicken",
  "Noodles",
  "Japanese"
];

const foodTypes = [
  { label: "All", value: "All" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" }
];

const menu = [1, 1, 1, 1, 1, 1];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth, restaurant } = useSelector((store) => store || {});

  const { id, city } = useParams();
  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);
  const [image3Loaded, setImage3Loaded] = useState(false);
  const [image1Src, setImage1Src] = useState("https://media.istockphoto.com/id/505797368/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%B8%8B%E8%B0%B7%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E8%A1%97%E6%9D%B1%E4%BA%AC-%E6%97%A5%E6%9C%AC.jpg?s=2048x2048&w=is&k=20&c=yCZeLMdD9wfMqbI4PmoJ3VV_r8Jsc5ImUgsHJyHeQys=");
  const [image2Src, setImage2Src] = useState("https://media.istockphoto.com/id/505797368/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%B8%8B%E8%B0%B7%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E8%A1%97%E6%9D%B1%E4%BA%AC-%E6%97%A5%E6%9C%AC.jpg?s=2048x2048&w=is&k=20&c=yCZeLMdD9wfMqbI4PmoJ3VV_r8Jsc5ImUgsHJyHeQys=");
  const [image3Src, setImage3Src] = useState("https://media.istockphoto.com/id/505797368/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%B8%8B%E8%B0%B7%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E8%A1%97%E6%9D%B1%E4%BA%AC-%E6%97%A5%E6%9C%AC.jpg?s=2048x2048&w=is&k=20&c=yCZeLMdD9wfMqbI4PmoJ3VV_r8Jsc5ImUgsHJyHeQys=");


  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };

  console.log("restaurant ", restaurant);

  useEffect(() => {
    if (jwt && id) {
      dispatch(getRestaurantById({jwt, restaurantId:id}));
    }
  }, [jwt, id, dispatch]);

  useEffect(() => {
    const image1 = new Image();
    image1.src = restaurant.restaurant?.images[0];
    image1.onload = () => {
      setImage1Loaded(true);
      setImage1Src(image1.src);
    };
    image1.onerror = () => {
      setImage1Loaded(true);
    };

    const image2 = new Image();
    image2.src = restaurant.restaurant?.images[1];
    image2.onload = () => {
      setImage2Loaded(true);
      setImage2Src(image2.src);
    };
    image2.onerror = () => {
      setImage2Loaded(true);
    };

    const image3 = new Image();
    image3.src = restaurant.restaurant?.images[2];
    image3.onload = () => {
      setImage3Loaded(true);
      setImage3Src(image3.src);
    };
    image3.onerror = () => {
      setImage3Loaded(true);
    };
  }, [restaurant]);

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/Japan/Japanese fast food/3
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
                <img
                  className="w-full h-[40vh] object-cover"
                  src={image1Src}
        alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div>
                <img
                  className="w-full h-[40vh] object-cover"
                  src={image2Src}
        alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div>
                <img
                  className="w-full h-[40vh] object-cover" src={image3Src}
        alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                <h3>Japanese fast food</h3>
                <p>Japanese fast food</p>
                <p>Japanese fast food</p>
                <p>Japanese fast food</p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">{restaurant.restaurant?.restaurantName}</h1>
          <p className="text-gray-500 mt-1">
{restaurant.restaurant?.description}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Osaka, Osaka</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 9:00AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28 p-5 d">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodCategories.map((item) => (
                    <FormControlLabel
                      key={item.id}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
