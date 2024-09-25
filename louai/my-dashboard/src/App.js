import { Avatar, Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import React from 'react';
import Leaderboard from './leaderbord';

const ClubBox = ({ rank, clubName, points }) => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={505}
        height={84}
        borderRadius="8px"
        mb={2}
        p={1}
    >
        <Box display="flex" alignItems="center">
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={40}
                height={40}
                borderRadius="50%"
                bgcolor="#BCF9FF" // Background color for the rank circle
                mr={2} // Right margin for spacing
            >
                <Typography variant="body1" sx={{ fontWeight: '600', fontSize: '18px', color: '#2E2E2E' }}>
                    {rank}
                </Typography>
            </Box>
            <Avatar
                alt={clubName}
                src="/path/to/image.jpg"
                sx={{ width: 60, height: 60, mx: 2 }}
            />
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
                    lineHeight: 'auto',
                    textAlign: 'left',
                }}
            >
                {clubName}
            </Typography>
        </Box>
        <Typography variant="body1">{points} pts</Typography>
    </Box>
);

const App = () => {
    return (
        <Box
            display="flex"
            width={1196}
            height={668}
            border="1px solid #ccc"
            p={2}
            bgcolor="#BCF9FF"
        >
            <Box style={{ padding: '16px 24px' }}>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        width={570.5}
                        height={636}
                        mr="8px"
                        bgcolor="#FFFFFF"
                        borderRadius={8}
                    >
                        {/* Left Box Content */}
                        <Leaderboard />
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        width={570.5}
                        height={636}
                        bgcolor="#FFFFFF"
                        ml={3}
                        borderRadius={8}
                        alignItems="center" // Center items horizontally  
                        sx={{ px: 2 }}
                    >
                        {/* Right Box Content */}
                        {[...Array(6)].map((_, index) => (
                            <React.Fragment key={index}>
                                <ClubBox
                                    rank={index + 4} // Using direct index + 4 for rank
                                    clubName={`Club ${index + 4}`}
                                    points={`${(index + 4) * 10}`}
                                />
                                {index < 5 && (
                                    <Divider
                                    sx={{ borderColor: '#D6D6D9', width: '90%', mx: 'auto', my: 1 }} // Centered with reduced width
                                />
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default App;
