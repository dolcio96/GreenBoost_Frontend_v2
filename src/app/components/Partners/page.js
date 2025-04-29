"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import PartnersSlider from "./PartnersSlider"; // Assicurati che il path sia corretto

const Partners = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.primary,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight="bold" mb={2} color={theme.palette.text.primary}>
          Trusted by Industry Leaders
        </Typography>
        <Typography variant="h4" color={theme.palette.text.secondary} mb={4}>
          Leading companies partnering with us for sustainable transformation
        </Typography>
        <PartnersSlider />
      </Container>
    </Box>
  );
};

export default Partners;
