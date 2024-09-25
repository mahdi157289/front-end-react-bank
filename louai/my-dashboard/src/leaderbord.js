import { Avatar, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ClubBox = ({ rank, clubName, finalPoints, isWinner, image, bgColor }) => {  
  const [points, setPoints] = useState(0);  
  const height = 430 - (rank - 1) * 50;  
  const avatarSize = 130;  

  useEffect(() => {  
    let start = 0;  
    const incrementPoints = setInterval(() => {  
      start += 1;  
      if (start <= finalPoints) {  
        setPoints(start);  
      } else {  
        clearInterval(incrementPoints);  
      }  
    }, 50);  
    return () => clearInterval(incrementPoints);  
  }, [finalPoints]);  

  return (  
    <Box  
      display="flex"  
      flexDirection="column"  
      alignItems="center"  
      justifyContent="flex-end"  
      width={138}  
      bgcolor={bgColor || (isWinner ? '#FFA500' : '#f0f0f0')}  
      height={height}  
      borderRadius="16px"  
      boxShadow={isWinner ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none'}  
      position="relative"  
      mb={2}  
     
    >  
      <Avatar  
        alt={clubName}  
        src={image}  
        sx={{  
          width: avatarSize,  
          height: avatarSize,  
          position: 'absolute',  
          top: -avatarSize / 2,  
          left: '50%',  
          transform: 'translateX(-50%)',  
          border: `4px solid ${bgColor || (isWinner ? '#FFA500' : '#f0f0f0')}`,  
        }}  
      />  

      {isWinner && (  
        <Box  
          position="absolute"  
          top={-avatarSize / 2 - 24}  
          left="40%"  
          transform="translateX(-50%)"  
        >  
          <Typography variant="h6">👑</Typography>  
        </Box>  
      )}  

<Typography   
  variant="h6"   
  sx={{   
    textAlign: 'center',   
    fontFamily: 'Roboto',   
    fontWeight: '600', // SemiBold  
    fontSize: '36px',   
    color: '#2E2E2E' // Hex color  
  }}  
>  
  {clubName}  
</Typography>
      <Box mb={3} />  
      <Typography   
  variant="body1"   
  sx={{   
    textAlign: 'center',   
    fontFamily: 'Roboto',   
    fontWeight: '600', // SemiBold  
    fontSize: '24px',   
    color: '#2E2E2E' // Hex color  
  }}  
>  
  {points} pts  
</Typography>

      <Box mb={3} />  

      <Box  
        display="flex"  
        alignItems="center"  
        justifyContent="center"  
        width={54}  
        height={54}  
        borderRadius="50%"  
        bgcolor="#e0f7fa"  
        sx={{ border: '2px solid #000', position: 'absolute', bottom: -27, left: '50%', transform: 'translateX(-50%)' }}  
      >  
        <Typography variant="body2">{rank}°</Typography>  
      </Box>  
    </Box>  
  );  
};  

const leaderbord = () => {  
  return (  
    <Box  
      display="flex"  
      justifyContent="center"  
      alignItems="center"  
      width={570.5}  
      height={636}  
      borderRadius={8}  
      p={2}  
      position="relative"  
    >  
     

      {/* Club Boxes */}  
      <Box display="flex" flexDirection="row" alignItems="flex-end" justifyContent="center">  
        <ClubBox rank={2} clubName="Club 2" finalPoints={38} image="/path/to/image1.jpg" bgColor="#B4B2B3" />  
        <ClubBox rank={1} clubName="Club 1" finalPoints={39} isWinner image="/path/to/image2.jpg" />  
        <ClubBox rank={3} clubName="Club 3" finalPoints={37} image="/path/to/image3.jpg" bgColor="#A0621C" />  
      </Box>  
    </Box>  
  );  
};  

export default leaderbord;