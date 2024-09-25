import { Box, Card, CardContent, Grid2, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import ImpressionsChart from './impressionchart';

const statistique = ({ data }) => {
  return (
    <Box padding={{ xs: 2, sm: 4 }} maxWidth="100%">
      <Box sx={{ backgroundColor: "#D6D6D9", padding: { xs: 2, sm: 4 }, borderRadius: 2 }}>
        <Grid2 container spacing={4}>
          {[
            { title: "Clicks", value: "6,828", change: "↑ 67%", color: "green" },
            { title: "Impressions", value: "238 K", change: "↓ 22%", color: "red" },
            { title: "Average CPC", value: "$3.21", change: "↑ 0%", color: "green" },
            { title: "CPA Activation", value: "$44.63", change: "↓ 7%", color: "red" },
            { title: "CPA Use", value: "$41.20", change: "↑ 0%", color: "green" },
          ].map((stat, index) => (
            <Grid2 item xs={12} sm={6} md={4} lg={2} key={index}>
              {/* Stat card with title and value */}
              <Card sx={{ width: '100%', height: 180, borderRadius: 2, borderColor: stat.color }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                      {stat.title}
                    </Typography>
                    <Typography sx={{ color: stat.color }}>{stat.change}</Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      paddingTop: 2,
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: { xs: 24, md: 40 }, // Responsive font size
                    }}
                  >
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        <Grid2 container spacing={3}>
          <Grid2 item xs={12} md={8}>
            {/* Impressions chart */}
            <Card sx={{ borderRadius: 2, width: '100%', height: 356 }}>
              <ImpressionsChart />
            </Card>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            {/* Progress bar */}
            <Card sx={{ borderRadius: 2, width: '100%', height: 356 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18, color: '#2E2E2E' }}>
                  Progress
                </Typography>
                {[...Array(4)].map((_, index) => {
                  const value = 7161; 
                  const total = 10000;
                  const percentage = (value / total) * 100; 

                  return (
                    <Box key={index} mb={2}>
                      <Box display="flex" justifyContent="space-between">
                        <Typography>Step into a fully electric car.</Typography>
                        <Typography>{value}</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={percentage} sx={{ height: 10, borderRadius: 5 }} />
                    </Box>
                  );
                })}
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        <Box sx={{ width: '100%', padding: 2 }}>
          {/* Ads table */}
          <Card sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18, color: '#2E2E2E' }}>
                List of Ads
              </Typography>
              <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {["AD", "AD Set", "Campaign", "Clicks", "Impressions", "Average CPC", "CTR", "CPA Activation", "CPA USE"].map((head, index) => (
                        <TableCell key={index}>{head}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...Array(2)].map((_, index) => (
                      <TableRow key={index}>
                        <TableCell><img alt="Ad" src="" width="100" height="100" /></TableCell>
                        {["Tesla Premium...", "Default", "112", "5,611", "$2.14", "5.00%", "$54.00", "$34.00"].map((content, idx) => (
                          <TableCell key={idx} align="center">{content}</TableCell>
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
