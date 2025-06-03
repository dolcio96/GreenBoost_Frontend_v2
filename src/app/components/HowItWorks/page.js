'use client';

import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import {
  RiUploadCloudLine,
  RiRobotLine,
  RiBarChartLine,
  RiRocketLine,
} from 'react-icons/ri';
import HowItWorksStep from './HowItWorksStep';
import { Element } from 'react-scroll';

const HowItWorks = () => {
  const theme = useTheme();
  const steps = [
    {
      icon: RiUploadCloudLine,
      title: 'Upload Reports',
      description: 'Simply drag and drop your sustainability reports',
    },
    {
      icon: RiRobotLine,
      title: 'AI Analysis',
      description: 'Our AI processes and analyzes your data',
    },
    {
      icon: RiBarChartLine,
      title: 'Get Insights',
      description: 'Review detailed analytics and benchmarks',
    },
    {
      icon: RiRocketLine,
      title: 'Take Action',
      description: 'Implement data-driven strategies',
    },
  ];

  return (

    <Element name="howitworks" id="howitworks">
      <Box component="section" sx={{ py: 10, backgroundColor:  theme.palette.background.dark  }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h3"
              fontWeight="bold"
              mb={2}
              color={theme.palette.text.primary}
            >
              How D4D Works
            </Typography>
            <Typography variant="h4"     color={theme.palette.text.secondary}>
             Deep dive in our simple process
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {steps.map((step, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <HowItWorksStep {...step} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Element>
  );
};

export default HowItWorks;
