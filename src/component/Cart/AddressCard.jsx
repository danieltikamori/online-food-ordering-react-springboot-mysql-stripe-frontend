import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';
import PropTypes from 'prop-types';

const AddressCard = ({item,showButton, handleSelectAddress}) => {

  return (
    <Card className="flex gap-5 w-64 p-5">
      <HomeIcon/>
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Home</h1>
        <p>
        3-5-28 Minamisemba Fuji Bldg. Minamisemba 1F, Chuo, Osaka, 542-0081, Osaka Prefecture
        </p>
        {showButton && (
          <Button variant="outlined" fullWidth onClick={()=>handleSelectAddress(item)}>Select</Button>)}

      </div>
      
    </Card>
  )
}

AddressCard.propTypes = {
  item: PropTypes.number.isRequired,
  showButton: PropTypes.bool.isRequired,
  handleSelectAddress: PropTypes.func.isRequired,
   // or .isRequired if it's a required prop
};
  

export default AddressCard