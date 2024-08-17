import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import { CustomerRoute } from "./Routers/CustomerRoute";
import Auth from "./component/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./component/State/Authentication/Action";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = auth.jwt || localStorage.getItem("jwt");
  // const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getUser(jwt || auth.jwt));
  }, [dispatch, auth.jwt, jwt]);
  // }, [dispatch, jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
