import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { RiUploadCloudLine, RiRobotLine, RiBarChartLine, RiRocketLine } from 'react-icons/ri';

const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{ padding: '80px 0', backgroundColor: '#1F2937' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h2" fontWeight="bold" mb={2} color="#F9FAFB">
            How It Works
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Get started in minutes with our simple process
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0379321a',
                borderRadius: '50%',
                marginBottom: 2,
              }}
            >
              <RiUploadCloudLine size={32} color="#037932" />
            </Box>
            <Typography variant="h6" fontWeight="600" color="#F9FAFB" mb={1}>
              Upload Reports
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Simply drag and drop your sustainability reports
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0379321a',
                borderRadius: '50%',
                marginBottom: 2,
              }}
            >
              <RiRobotLine size={32} color="#037932" />
            </Box>
            <Typography variant="h6" fontWeight="600" color="#F9FAFB" mb={1}>
              AI Analysis
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Our AI processes and analyzes your data
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0379321a',
                borderRadius: '50%',
                marginBottom: 2,
              }}
            >
              <RiBarChartLine size={32} color="#037932" />
            </Box>
            <Typography variant="h6" fontWeight="600" color="#F9FAFB" mb={1}>
              Get Insights
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Review detailed analytics and benchmarks
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0379321a',
                borderRadius: '50%',
                marginBottom: 2,
              }}
            >
              <RiRocketLine size={32} color="#037932" />
            </Box>
            <Typography variant="h6" fontWeight="600" color="#F9FAFB" mb={1}>
              Take Action
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Implement data-driven strategies
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HowItWorks;
