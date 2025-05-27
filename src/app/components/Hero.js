"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import StyledButton from "@/components/buttons/StyledButton";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const EventHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          px: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" }, // 100% su mobile, 50% su schermi grandi
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              Turn ESG Data into Powerful Sustainability Strategies
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 1,
                fontWeight: 900,
                color: theme.palette.text.tertiary,
              }}
            >
              Leverage AI-powered insights to enhance your sustainability strategy.
              Analyze ESG performance, benchmark against industry standards, and
              identify optimal parameters aligned to your goals.
            </Typography>

            <StyledButton
              variant="contained"
              color="primary"
              size="large"
              startIcon={<RxDashboard />}
              aria-label=" Get Started"
              component={Link}
              href="/Registration"
              sx={{ mr: 2 }}
            >
              Get Started
            </StyledButton>

            <StyledButton
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<RxDashboard />}
              aria-label="Watch Demo"
            >
              <ScrollLink to={"features"} smooth={true} duration={500} offset={-70} >
                Watch Demo
              </ScrollLink>

            </StyledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventHero;