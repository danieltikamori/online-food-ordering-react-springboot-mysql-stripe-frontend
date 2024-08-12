import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#BC002D] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">Tika Foods</li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">

            <Avatar sx={{ backgroundColor: "white", color: pink.A400 }}>C</Avatar>

        </div>

        <div className="">

        <IconButton>
          <Badge color="secondary" badgeContent={3}>
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }}/>
          </Badge>

          </IconButton>

</div>
      </div>
    </div>
  );
}
