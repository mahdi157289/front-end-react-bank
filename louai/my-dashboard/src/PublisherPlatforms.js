// PublisherPlatforms.js  
import { Box, Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Analytical', value: 22, color: '#0088FE' },
  { name: 'Consciousness', value: 9, color: '#00C49F' },
  { name: 'Authority', value: 9, color: '#FFBB28' },
  { name: 'Structure', value: 60, color: '#FF8042' },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PublisherPlatforms extends PureComponent {
  render() {
    return (
      <Box borderRadius="16px" padding={2} width="100%" height="356px" maxWidth={460.67}>
        <Typography  variant="h6"   
              style={{   
                marginRight: '16px',   
                fontFamily: 'Roboto',   
                fontWeight: 600, // SemiBold  
                fontSize: '18px',   
                color: '#2E2E2E'   
              }}  marginBottom={2}>
          Publisher Platforms
        </Typography>
        <Box alignItems="center" display="flex">
          <ResponsiveContainer width="50%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <Box marginTop={2} width="50%" marginLeft={2}> 
            {data.map((entry, index) => (
              <Box key={index} display="flex" alignItems="center" marginBottom={1}>
                <Box
                  width={16}
                  height={16}
                  backgroundColor={entry.color}
                  borderRadius="50%"
                  marginRight={1}
                  
                />
                <Typography variant="body2" marginTop={2} >
                  {entry.name} - {entry.value}%
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}