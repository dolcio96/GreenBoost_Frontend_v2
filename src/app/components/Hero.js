"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, AppBar, Toolbar, IconButton, useMediaQuery, useTheme, Card, Avatar, styled } from "@mui/material";
import { FiDownload } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { FaQuoteLeft } from "react-icons/fa";
import StyledButton from "@/components/buttons/StyledButton";

import Link from 'next/link';

const TestimonialCard = styled(Card)(({ theme }) => ({
  background: "rgba(7, 51, 5, 0.7)",
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
    <Box sx={{ bgcolor: "rgba(51, 175, 46, 0.72)", minHeight: "100vh", color: "white" }}>
      <Container maxWidth="lg" sx={{ mt: 0, mb: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: 6
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box
              component="img"
              src="/naturaAlberi.jpg"
              alt="Smartphone with delivery notification"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 4,
                boxShadow: "0 20px 40px rgba(39, 204, 80, 0.3)"
              }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9";
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              Deliver Better.
              <br />
              Deliver Faster.
            </Typography>

            <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
              Transform your delivery experience with our cutting-edge platform.
              Real-time tracking, instant notifications, and seamless integration
              make delivery management effortless.
            </Typography>

            <StyledButton
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<RxDashboard />}
              aria-label="Accedi alla Dashboard"
              component={Link}
              href="/dashboard"
            >
              Accedi alla Dashboard
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
