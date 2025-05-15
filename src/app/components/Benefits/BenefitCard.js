"use client";
import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import { styled } from "@mui/system";



const BenefitCard = ({ icon, title, description }) => {
  const theme = useTheme();

// Wrapper per l'icona con animazione e centratura
const IconWrapper = styled(Box)(() => ({
  width: 64,
  height: 64,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.secondary.main,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));


  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
        backgroundColor: theme.palette.background.light,
        transition: "box-shadow 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <IconWrapper>
        <Box
          sx={{
            color: theme.palette.background.dark,
            
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {React.cloneElement(icon, { size: 36 })}
        </Box>
      </IconWrapper>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        {title}
      </Typography>
      <Typography variant="h6" sx={{ color: theme.palette.text.secondary }}>
        {description}
      </Typography>
    </Paper>
  );
};

export default BenefitCard;
