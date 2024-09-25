import { Avatar, Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Leaderboard from './Leaderboard';

// Component to display individual club information
const ClubBox = ({ rank, clubName, points }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    width="100%"
    height={84}
    borderRadius="8px"
    mb={2}
    p={1}
    sx={{ maxWidth: 505 }}
  >
    <Box display="flex" alignItems="center">
      {/* Rank Circle */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={40}
        height={40}
        borderRadius="50%"
        bgcolor="#BCF9FF"
        mr={2}
      >
        <Typography variant="body1" sx={{ fontWeight: '600', fontSize: '18px', color: '#2E2E2E' }}>
          {rank}
        </Typography>
      </Box>
      {/* Club Avatar */}
      <Avatar alt={clubName} src="/path/to/image.jpg" sx={{ width: 60, height: 60, mx: 2 }} />
      {/* Club Name */}
      <Typography
        ml={2}
        variant="body1"
        sx={{
          width: '265.5px',
          height: '28px',
          fontFamily: 'Roboto',
          fontWeight: 500,
          fontSize: '24px',
          color: '#2E2E2E',
          textAlign: 'left',
        }}
      >
        {clubName}
      </Typography>
    </Box>
    {/* Club Points */}
    <Typography variant="body1">{points} pts</Typography>
  </Box>
);

// Main leaderboard component
const leaderbord0 = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      width="100%"
      height="auto"
      border="1px solid #ccc"
      p={2}
      bgcolor="#BCF9FF"
    >
      <Box p={{ xs: 2, md: '16px 24px' }} width="100%">
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between">
          {/* Left Box Content */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
            maxWidth={570.5}
            height={636}
            mb={3}
            bgcolor="#FFFFFF"
            borderRadius={8}
            mr={{ md: '8px' }}
          >
            <Leaderboard />
          </Box>

          {/* Right Box Content */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            width="100%"
            maxWidth={570.5}
            height={636}
            bgcolor="#FFFFFF"
            ml={{ md: 3 }}
            borderRadius={8}
          >
            {[...Array(6)].map((_, index) => (
              <React.Fragment key={index}>
                <ClubBox rank={index + 4} clubName={`Club ${index + 4}`} points={`${(index + 4) * 10}`} />
                {index < 5 && (
                  <Divider sx={{ borderColor: '#D6D6D9', width: '90%', mx: 'auto', my: 1 }} />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default leaderbord0;