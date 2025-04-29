"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TextBox = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" fontWeight="bold" color={theme.palette.text.primary} mb={2}>
        Transform Your Business
      </Typography>
      <Typography variant="h5" color={theme.palette.text.secondary}>
        Discover how our platform empowers you to drive sustainable change, optimize your operations, and lead your industry towards a greener future.
      </Typography>
    </Box>
  );
};

export default TextBox;
