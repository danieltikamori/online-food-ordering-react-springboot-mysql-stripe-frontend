import {
  Divider,
  FormControl,
  Grid,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";

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

const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {

  const [foodType,setFoodType]=useState("all")
  const handleFilter=(e)=>{
    console.log(e.target.value,e.target.name)
  }

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
                  src="https://cdn.pixabay.com/photo/2024/06/24/15/29/sushi-8850406_1280.png"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div>
                <img
                  className="w-full h-[40vh] object-cover"
                  src="https://media.istockphoto.com/id/1814873931/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%8F%8B%E4%BA%BA%E3%81%A8%E7%A7%81%E3%81%AF%E6%97%A5%E6%9C%AC%E3%81%A7%E3%82%AB%E3%83%84%E4%B8%BC%E3%81%AE%E3%83%90%E3%83%A9%E3%82%A8%E3%83%86%E3%82%A3%E3%82%BB%E3%83%83%E3%83%88%E3%82%92%E9%A3%9F%E3%81%B9%E3%81%A6%E6%A5%BD%E3%81%97%E3%82%93%E3%81%A7%E3%81%84%E3%81%BE%E3%81%99.jpg?s=1024x1024&w=is&k=20&c=HSJK8c5TKF89KD9H7G9gm_wt7ErYqQ8G1HRQ0Oxovos="
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div>
                <img
                  className="w-full h-[40vh] object-cover"
                  src="https://media.istockphoto.com/id/505797368/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%B8%8B%E8%B0%B7%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E8%A1%97%E6%9D%B1%E4%BA%AC-%E6%97%A5%E6%9C%AC.jpg?s=2048x2048&w=is&k=20&c=yCZeLMdD9wfMqbI4PmoJ3VV_r8Jsc5ImUgsHJyHeQys="
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
          <h1 className="text-4xl font-semibold">Japanese Fast Food</h1>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            magni quia delectus ut. In eaque similique maiores temporibus beatae
            libero, facilis molestias fugiat repudiandae, accusamus corporis.
            Culpa ad sint aut.
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
                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
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
            <Divider/>
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
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
{menu.map((item)=><MenuCard key={item.id}/>)}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
