import { Box, Typography } from '@mui/material';
import React from 'react';

const RatingComponent = () => {  
  return (  
    <Box  
     
    >  
      <Typography  
        variant="h5"  
        sx={{  
          fontFamily: 'Roboto',  
          fontWeight: 'bold',  
          fontSize: '36px',  
          color: '#00272B',  
        }}  
      >  
        RISEUP - youth association  
      </Typography>  
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>  
          <Rating  
            name="customized-rating"  
            value={ratingValue} // Rating value can be from state or props  
            readOnly // Set to true if you want to make it read-only  
            precision={0.1} // Control precision of the rating  
            sx={{ color: '#FFCC00' }} // Custom color for the stars  
          />  
          <Typography  
            variant="body1"  
            sx={{  
              fontFamily: 'Roboto',  
              fontSize: '18px',  
              color: '#00272B',  
              marginLeft: '8px',  
            }}  
          >  
            {ratingValue} (65 Reviews)  
          </Typography> 
     
      </Box>  
    </Box>  
  );  
};  

export default RatingComponent;