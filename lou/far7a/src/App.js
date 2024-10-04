import { Box, Button, Grid2, Rating, Typography } from '@mui/material';
import React from 'react';
import ReviewCard from './ReviewCard';
import { reviews } from './reviewData';

const ReviewPage = () => {
  const reviewsPerColumn = 3;
  const ratingValue = 4.9;

  return (
    <Box
      sx={{
        width: 1441,
        height: 1422,
        backgroundColor: '#e0e0e0', // Change to your desired color  
        border: '1px solid #ccc', // Optional: for visual reference  
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: 1441,
          height: 175.5,
          borderRadius: '8px',
          backgroundColor: '#FFFFFF', // Change to your desired color  
          mb: 2, // Margin bottom for gap of 20px  
          position: 'relative', // To position the inner box  
        }}
      >
        <Box
          sx={{
            width: 572.5,
            height: 127.5,
            borderRadius: '8px',
            margin: '24px', // Padding of 24px  
            position: 'absolute', // Positioning it inside the first box  
          }}
        >

          <Box
            sx={{
              width: 127.5,
              height: 127.5,
              borderRadius: '24px',
              position: 'absolute',
              overflow: 'hidden', // Ensure the image doesn't overflow  
            }}
          >
            <img
              src="./image.png"
              alt="Description"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover' // This will maintain aspect ratio   
              }}
            />
          </Box>

          <Box
            sx={{
              width: 'calc(100% - 127.5px)',
              height: 127.5,

              borderRadius: '24px',
              position: 'absolute',
              right: 0,

            }}
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

            </Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontSize: '18px',
                color: '#00272B',
                marginLeft: '8px',
                marginTop: 1,
              }}
            >
              {ratingValue} (65 Reviews)
            </Typography>
          </Box>





        </Box>

        <Box
          sx={{
            width: 309,
            height: 127.5,
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
         
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'absolute',

            right: 12,
          }}
        >
          <Box
            sx={{
              top:10,
              display: 'flex',
              flexDirection: 'row', // Align items in a row
              alignItems: 'center', // Center items vertically
              gap: '12px', // Gap between Typography components
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '20px',
                color: '#00272B',
              }}
            >
              Upcoming Event
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto',
                fontSize: '20px',
                color: '#737070',
              }}
            >
              Event on 17 Nov
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: '166px', // Set width to 166px
              height: '54px',
              backgroundColor: '#00CDE1',
              color: '#FFFFFF',
              borderRadius: '12px',
              fontFamily: 'Inter',
              fontWeight: 'medium',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'flex-end',
              right:0,
              bottom:0,
              position:'absolute',
              
            }}
          >
            Add Review
          </Button>
        </Box>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#00272B',
          mb: 2, // Margin bottom for gap of 20px  
        }}
      >
        All Reviews
      </Typography>

      <Box
        sx={{
          width: 1441,
          height: 1170,
          borderRadius: '8px',
          // Change to your desired color  

        }}
      >
        <Grid2 container spacing={2}>
          {[0, 1, 2].map((colIndex) => (
            <Grid2 item xs={4} key={colIndex}>
              <Box
                sx={{
                  width: '467px', // Set width of the column  
                  height: 'auto', // Set height to auto to fit reviews dynamically  

                  borderRadius: '8px',
                  // Add some padding for aesthetics  
                }}
              >
                {/* Map over the reviews and limit to the current column */}
                {reviews
                  .slice(colIndex * reviewsPerColumn, (colIndex + 1) * reviewsPerColumn) // Get reviews for the current column  
                  .map((review, index) => (
                    <ReviewCard
                      key={index}
                      avatarSrc={review.avatarSrc}
                      name={review.name}
                      rating={review.rating}
                      reviewText={review.reviewText}
                    />
                  ))}
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default ReviewPage;