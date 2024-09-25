import { Box, Card, CardContent, Grid2, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import ImpressionsChart from './impressionchart';
import PublisherPlatforms from './PublisherPlatforms';
const statistique = ({ data }) => {
  return (
    <Box width="1920px" padding="240px">
      {/* <Navbar /> */}

      <Box width="1440px" height="1544px" backgroundColor="#D6D6D9">
        <Grid2 container spacing={4} style={{ padding: '0 0 20px 0', margin: 0 }}>
          {[
            { title: "Clicks", value: "6,828", change: "↑ 67%", color: "green" },
            { title: "Impressions", value: "238 K", change: "↓ 22%", color: "red" },
            { title: "Average CPC", value: "$3.21", change: "↑ 0%", color: "green" },
            { title: "CPA Activation", value: "$44.63", change: "↓ 7%", color: "red" },
            { title: "CPA Use", value: "$41.20", change: "↑ 0%", color: "green" },
          ].map((stat, index) => (
            <Grid2 item xs={12} sm={6} md={4} lg={2} key={index} style={{ margin: 0 }}>
              <Card style={{ width: "262px", height: "180px", borderRadius: '16px', borderWidth: '16px', borderColor: stat.color }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      {stat.title}
                    </Typography>
                    <Typography style={{ color: stat.color }}>{stat.change}</Typography>
                  </Box>

                </CardContent>
                <Typography
                  variant="h4"
                  style={{

                    padding: "10px",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    fontSize: "40px",
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {stat.value}
                </Typography>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        <Grid2 container spacing={3} style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <Grid2 item xs={12} md={8}>
            <Card style={{ borderRadius: "16px", width: "465.67px", height: "356px" }}>
              <ImpressionsChart />
            </Card>
          </Grid2>

          {/* Progress Card */}
          <Grid2 item xs={12} md={4}>
            <Card style={{ borderRadius: "16px", width: "460.67px", height: "356px" }}>
              <CardContent>
                <Typography variant="h6"   
              style={{   
                marginRight: '16px',   
                fontFamily: 'Roboto',   
                fontWeight: 600, // SemiBold  
                fontSize: '18px',   
                color: '#2E2E2E'   
              }}  >Progress</Typography>
                {[...Array(4)].map((_, index) => {
                  const value = 7161; // This is your current value  
                  const total = 10000; // Define your total here  
                  const percentage = (value / total) * 100; // Calculate the percentage based on the total  

                  return (
                    <Box key={index} mb={2}>
                      <Box display="flex" justifyContent="space-between">
                        <Typography>Stop wasting money at the pump and step into a fully electric powered car.</Typography>
                        <Typography>{value}</Typography> {/* Display value dynamically */}
                      </Box>
                      <LinearProgress variant="determinate" value={percentage} style={{ height: 10, borderRadius: 5 }} />
                    </Box>
                  );
                })}
              </CardContent>
            </Card>
          </Grid2>

          {/* Publisher Platforms Card */}
          <Grid2 item xs={12} md={4}>
            <Card style={{ borderRadius: "16px", width: "455px", height: "356px" }}>

              <PublisherPlatforms width="50%" />


            </Card>
          </Grid2>
        </Grid2>

        {/* Ads List Card */}
        <Box style={{ width: "100%", padding: '20px 0px 20px', borderRadius: "16px" }}>
          <Card style={{ borderRadius: "16px" }}>
            <CardContent>
              <Typography  variant="h6"   
              style={{   
                marginRight: '16px',   
                fontFamily: 'Roboto',   
                fontWeight: 600, // SemiBold  
                fontSize: '18px',   
                color: '#2E2E2E'   
              }}  >List of Ads</Typography>
              <TableContainer component={Paper} style={{ marginTop: 16 }}>
                <Table>
                  <TableHead>
                    <TableRow color="#D6D6D9" >
                      {["AD", "AD Set", "Campaign", "Clicks", "Impressions", "Average CPC", "CTR", "CPA Activation", "CPA USE"].map((head, index) => (
                        <TableCell key={index}>{head}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...Array(2)].map((_, index) => (
                      <TableRow key={index} style={{ width: "1392px", height: "142px" }}  >
                        {/* Placeholder for ad image */}
                        <TableCell style={{ width: "144px", height: "118px" }}><img alt="Ad" src="" width="100" height="100" /></TableCell>
                        {["Tesla Premium...", "Default", "112", "5,611", "$2.14", "5.00%", "$54.00", "$34.00"].map((content, idx) => (
                          <TableCell key={idx} sx={{

                            color: 'black',                // Example text color  
                            padding: '16px',               // Example padding for cell content  
                            textAlign: 'center',           // Center text alignment  

                            borderRadius: '8px',           // Add border radius if applicable  

                          }}>
                            {content}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

        </Box>
      </Box>
    </Box>
  );
};

export default statistique;