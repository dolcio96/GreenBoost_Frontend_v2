




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
                opacity: 0.8,
                fontWeight: "bold",
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
              aria-label="Buy Now"
              component={Link}
              href="/dashboard"
              sx={{ mr: 2 }}
            >
              Buy Now
            </StyledButton>

            <StyledButton
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<RxDashboard />}
              aria-label="Watch Demo"
              component={Link}
              href="/dashboard"
            >
              Watch Demo
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventHero;


/*  <Box
       sx={{
         
         minHeight: "100vh",
         color: theme.palette.text.primary,
         display: 'flex',
         alignItems: 'center',       // Centro verticale
         justifyContent: 'flex-start' // Allineamento a sinistra
       }}
     >
     <Container maxWidth="lg" sx={{ mt: 0, mb: 0, px: 4 }}>
 
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
               variant="h1"
               sx={{
                 mb: 3,
                 fontWeight: "bold",
                 color: theme.palette.text.primary
               }}
             >
               Turn ESG Data into Powerful Sustainability Strategies
               <br />
             </Typography>
 
             <Typography
               variant="h5"
               sx={{
                 mb: 4,
                 opacity: 0.8,
                 fontWeight: "bold",
                 color: theme.palette.text.tertiary
               }}
             >
               Leverage AI-powered insights to enhance your sustainability strategy. Analyze ESG performance, benchmark against industry standards, and identify optimal parameters aligned to your goals.
             </Typography>
 
             <StyledButton
               variant="contained"
               color="primary"
               size="large"
               startIcon={<RxDashboard />}
               aria-label="Buy Now"
               component={Link}
               href="/dashboard"
               sx={{ mr: 2 }}
             >
               Buy Now
             </StyledButton>
 
             <StyledButton
               variant="contained"
               color="secondary"
               size="large"
               startIcon={<RxDashboard />}
               aria-label="Watch Demo"
               component={Link}
               href="/dashboard"
             >
               Watch Demo
             </StyledButton>
           </Box>
         </Box>
       </Container>
     </Box>*/