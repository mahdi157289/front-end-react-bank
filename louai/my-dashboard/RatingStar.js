import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/material';
import React, { useState } from 'react';

const RatingStar = () => {
  const [selectedRating, setSelectedRating] = useState(0); // State to store selected rating

  // Function to set the rating
  const handleRatingClick = (index) => {
    setSelectedRating(index + 1); // Update state when a star is clicked
  };

  return (
    <Box
      sx={{
        width: '100%', // Responsive width
        maxWidth: 320,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Rendering 5 stars */}
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          sx={{
            color: index < selectedRating ? '#FFD700' : '#E0E0E0', // Gold for selected stars
            fontSize: { xs: 30, sm: 40 }, // Responsive font size
            cursor: 'pointer', // Clickable stars
          }}
          onClick={() => handleRatingClick(index)} // Handle star click
        />
      ))}
    </Box>
  );
};

export default RatingStar;
