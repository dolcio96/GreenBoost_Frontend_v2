import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const HowItWorksStep = ({ icon: Icon, title, description }) => {
  const theme = useTheme();
  return (
    <Box textAlign="center">
      <Box
        sx={{
          width: 96,
          height: 96,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.secondary.light,
          borderRadius: '50%',
          marginBottom: 2,
          marginLeft: 'auto',
          marginRight: 'auto', // Aggiungi questa linea per centrare orizzontalmente
        }}
      >
        <Icon size={48} color={theme.palette.secondary.main} />
      </Box>
      <Typography variant="h4" fontWeight="600" color={theme.palette.text.primary} mb={1}>
        {title}
      </Typography>
      <Typography variant="h6" color={theme.palette.text.secondary}>
        {description}
      </Typography>
    </Box>
  );
};

export default HowItWorksStep;
