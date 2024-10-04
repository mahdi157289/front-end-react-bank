// ReviewCard.js  
import { Avatar, Box, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const ReviewCard = ({ avatarSrc, name, rating, reviewText }) => {  
  return (  
    <Paper  
      elevation={3}  
      sx={{  
        width: 467, // Fixed width  
        borderRadius: 2,  
        marginBottom: 2  // Add a gap of 20px between cards  
      }}  
    >  
      <Box sx={{ padding: 3 }}> {/* Padding of 24px */}  
        <Box display="flex" alignItems="center">  
          <Avatar  
            alt={name}  
            src={avatarSrc}  
            sx={{ width: 56, height: 56, marginRight: 2 }}  
          />  
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>  
            <Typography  
              variant="h6"  
              sx={{  
                display: 'flex',
                alignItems:'center',
                justifycontent:'center',
                fontFamily: 'Roboto',  
                fontWeight: 'bold',  
                fontSize: '18px',  
                color: '#00272B', // Color from the first image  
                marginBottom: 1, // 8px gap for spacing before Rating  
              }}  
            >  
              {name}  
            </Typography>  
            
          </Box>  
          
        </Box>  
        <Rating  
              name="read-only"  
              value={rating}  
              readOnly  
              sx={{  
                '& .MuiRating-iconFilled': {  
                  color: '#FFCC00', // Color from the third image  
                },  
              
                marginTop: 2, // Optional for spacing  
              }}  
            /> 
        <Typography  
          variant="body1"  
          sx={{  
            fontFamily: 'Inter',  
            fontWeight: 'regular',  
            fontSize: '18px',  
            color: '#00272B', // Color from the second image  
            marginTop: 2, // 16px gap  
          }}  
        >  
          {reviewText}  
        </Typography>  
      </Box>  
    </Paper>  
  );  
};  

export default ReviewCard;