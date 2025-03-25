"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, AppBar, Toolbar, IconButton, useMediaQuery, useTheme, Card, Avatar, styled } from "@mui/material";
import { FiDownload } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { FaQuoteLeft } from "react-icons/fa";
import StyledButton from "@/components/buttons/StyledButton";

import Link from 'next/link';

const TestimonialCard = styled(Card)(({ theme }) => ({
  background: "rgb(82, 102,77)",
  padding: theme.spacing(3),
  borderRadius: 16,
  backdropFilter: "blur(10px)",
  marginTop: theme.spacing(4)
}));

const EventHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Box sx={{ bgcolor: "rgba(50, 175, 46, 0)", minHeight: "100vh", color: "white", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="lg" sx={{ mt: 0, mb: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: 6
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              Turn ESG Data into Powerfolls Sustainability Strategies.
              <br />
            
            </Typography>

            <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
              Laverage AI-poweredinsights to enhance your sustainability strategy. Analyze ESG performance, banchmark against industriey standards, and identify optimal parameters alygned to your goals.
            </Typography>

            <StyledButton
              variant="contained"
              customColor="#404E49"
              size="large"
              startIcon={<RxDashboard />}
              aria-label="Buy Now"
              component={Link}
              href="/dashboard"
            >
            Buy Now
            </StyledButton>

            <StyledButton
              variant="contained"
              customColor="#AFA897"
              size="large"
              startIcon={<RxDashboard />}
              aria-label="Watch Demo"
              component={Link}
              href="/dashboard"
            >
              Watch Demo
            </StyledButton>
            <TestimonialCard>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Customer avatar"
                  sx={{ width: 60, height: 60 }}
                />
                <Box>
                  <Typography variant="h6">Carica il tuo bilancio di Sosteniblià</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    -------------------------------------------------------------------
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Scopri come è posizionata la tua azienda nel mercato.
              </Typography>
            </TestimonialCard>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventHero;
