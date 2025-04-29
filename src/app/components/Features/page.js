"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Element } from "react-scroll";
import TextBox from "./TextBox";
import VideoBox from "./VideoBox";

const Features = () => {
  const theme = useTheme();

  return (
    <Element name="features" id="features">
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.light }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextBox />
            </Grid>
            <Grid item xs={12} md={6}>
              <VideoBox />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Element>
  );
};

export default Features;
