import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Rating, TextField, Typography } from '@mui/material';
import React from 'react';
import RatingStar from './ratingstar';

const App = () => {
  const labels = ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'];

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1047,
          height: '60px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          padding: '0 16px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          mx: 'auto', // Center horizontally
        }}
      >
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '40px',
            lineHeight: '150%',
            color: '#00CDE1',
          }}
        >
          Feedback
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box mb={3} />

      {/* Main Content Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          maxWidth: 1046,
          bgcolor: 'white',
          borderRadius: '8px',
          p: 2,
          mx: 'auto', // Center horizontally
        }}
      >
        {/* Left Side: Logo and Event Info */}
        <Box
          sx={{
            width: { xs: '100%', md: 360 },
            height: 570,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Box
            sx={{
              width: 200,
              height: 294,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Inner Box 1 */}
            <Box
              sx={{
                width: 200,
                height: 189,
                bgcolor: 'white',
                mb: 1,
              }}
            />

            {/* Logo Image */}
            <img
              src="logo.png"
              alt="Logo"
              style={{
                width: '100px',
                marginBottom: '16px',
              }}
            />

            {/* Typography for the title */}
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              RISEUP
            </Typography>

            {/* Inner Box 2 */}
            <Box
              sx={{
                width: 200,
                height: 40,
                mb: 1,
              }}
            />

            {/* Event Rating */}
            <Rating name="event-rating" defaultValue={4} precision={0.5} readOnly />

            {/* Typography for the event date */}
            <Typography variant="body2">Event on 17 Nov</Typography>
          </Box>
        </Box>

        {/* Right Side: Feedback Form */}
        <Box
          sx={{
            width: { xs: '100%', md: 686 },
            height: 570,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            p: 2,
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '32px',
              color: '#00CDE1',
            }}
          >
            Send your feedback
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              fontFamily: 'Inter',
              fontWeight: 'regular',
              fontSize: '18px',
              lineHeight: '25.2px',
              color: '#00272B',
            }}
          >
            How would you rate the overall event experience?
          </Typography>
          <RatingStar />
          <Box display="flex" justifyContent="center" alignItems="center" padding={1}>
            {labels.map((label) => (
              <Button
                key={label}
                variant="outlined"
                sx={{
                  width: '116px',
                  height: '34px',
                  borderRadius: '19px',
                  borderColor: '#000000',
                  margin: '0 10px',
                  ':hover': {
                    borderColor: '#000000',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '15px',
                    fontWeight: '400',
                    color: '#000000',
                  }}
                >
                  {label}
                </Typography>
              </Button>
            ))}
          </Box>

          <TextField
            label="Anything else you'd like us to know? (optional)"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          />
          <Button variant="contained" size="large" sx={{ backgroundColor: '#00BCD4', borderRadius: '20px' }}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default App;