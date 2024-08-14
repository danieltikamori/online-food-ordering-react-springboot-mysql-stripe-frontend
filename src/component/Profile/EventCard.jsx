import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://cdn.pixabay.com/photo/2022/06/14/18/57/chicken-biryani-7262650_640.jpg"
        />
        <CardContent>
          <Typography variant="h5">Indian Fast Food</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">50% OFF on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>{"Osaka"}</p>
            <p className="text-sm text-blue-500">
              {"August 11, 2024 10:00 AM"}
            </p>
            <p className="text-sm text-red-500">{"August 13, 2024 10:00 AM"}</p>
          </div>
        </CardContent>
        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
