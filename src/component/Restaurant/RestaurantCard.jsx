import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';

function RestaurantCard({ item ,index}) {
  // const navigate = useNavigate();
  const handleAddToFavorites=()=>{
    console.log("Handle to add fav....")
  }

  return (
    <Card className="m-5 w-[18rem]">
      <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
        <img
          className='w-full h-[10rem] rounded-t-md object-cover'
          src={"https://images.pexels.com/photos/3714786/pexels-photo-3714786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt=''
        />
        <Chip
        size='small'
        className='absolute top-2 left-2'
        color={true?"success":"error"}
        label={true?"open":"closed"}
        />
      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>Fast food</p>
          <p className='text-gray-500 text-m'>Yes</p>
        </div>
        <div>
          <IconButton>
            {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

RestaurantCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RestaurantCard;
