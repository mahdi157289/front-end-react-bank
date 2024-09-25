import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [  
  { name: 'Page A', uv: 23800 },  
  { name: 'Page B', uv: 20000 },  
  { name: 'Page C', uv: 23000 },  
  { name: 'Page D', uv: 25000 },  
  { name: 'Page E', uv: 21900 },  
  { name: 'Page F', uv: 24500 },  
  { name: 'Page G', uv: 26000 },  
];

export default class ImpressionsChart extends PureComponent {
  render() {
    const currentImpressions = 238; // Current value
    const percentageChange = 67; // Example percentage change

    return (
      <Card sx={{ borderRadius: 2, padding: 2, backgroundColor: "#fff", width: '100%', height: '100%' }}>
        {/* Card containing the impression chart */}
        <CardContent>
          {/* Displaying Impressions text and dynamic values */}
          <Box display="flex" alignItems="center" marginBottom={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18, color: '#2E2E2E' }}>
              Impressions
            </Typography>
            <Typography variant="h8" sx={{ marginLeft: 'auto', fontSize: 16 }}>
              {currentImpressions.toLocaleString()} K
            </Typography>
            <Typography variant="body2" sx={{ color: "green", fontWeight: 'bold', fontSize: 16 }}>
              {percentageChange}% <span style={{ fontSize: "12px" }}>↑</span>
            </Typography>
          </Box>

          {/* Responsive container for the chart */}
          <Box sx={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#4a90e2" fill="#4a90e2" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
