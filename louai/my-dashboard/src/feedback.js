import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Rating, TextField, Typography } from '@mui/material';
import React from 'react';
import RatingStar from './ratingstar';


    const feedback = () => {
        const labels = ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'];
        return (
            <Box>
                 <Box  
            sx={{  
              display: 'flex',  
              alignItems: 'center',  
              justifyContent: 'space-between',  
              width: '1047px',  
              height: '60px',  
              backgroundColor: '#FFFFFF',  
                
              borderRadius: '8px',  

              padding: '0 16px ',  
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',  
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
            <Box
                sx={{
                    width: 1046,
                    height: 570,
                    display: 'flex',
                    bgcolor: 'white', // Background color for the outer box  
                    borderRadius: '8px',
                    p: 2,
                }}
            >
                {/* Left Side: Logo and Event Info */}
                <Box
                    sx={{
                        width: 360,
                        height: 570,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // Background color for the left box  
                       
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
            bgcolor: 'white', // Background color for inner box 1  
            mb: 1, // Margin bottom  
            display: 'flex' ,
            justifyconatent:'center',
            alignitems: 'center' ,
        }}  
    />  
    
    {/* Logo Image */} 
    <img   
    src="logo.png"   
    alt="Logo"   
    style={{   
        width: '100px',   
        marginBottom: '16px'   
    }}   
/>  

{/* Typography for the title */}   
<Typography variant="h5" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '36px', color: '#000000', mb: 1 }}>  
    RISEUP  
</Typography>  

{/* Inner Box 2 */}  
<Box   
    sx={{  
        width: 200,  
        height: 40,  
        mb: 1, // Margin bottom  
    }}  
/>  

{/* Event Rating */}   
<Rating   
    name="event-rating"   
    defaultValue={4}   
    precision={0.5}   
    readOnly   
    sx={{ mb: 8 }} // Add margin bottom of 65px to create space below  
/>  

 
<Typography variant="h5" sx={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '20px', color: '#737070' }}>  
    RISEUP  
</Typography>
<Typography variant="h5" sx={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '20px', color: '#737070' }}>  
    Event on 17 Nov  
</Typography>
</Box>

                </Box>

                {/* Right Side: Feedback Form */}
                <Box
                    sx={{
                        width: 686,
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
                            fontFamily: 'Inter', // Font family  
                            fontWeight: 500, // Medium weight  
                            fontSize: '32px', // Font size  
                            color: '#00CDE1', // Custom color  
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
                            color: '#00272B'
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
                    textTransform: 'none', // Prevents text from being converted to uppercase  
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

    export default feedback;