"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, AppBar, Toolbar, IconButton, useMediaQuery, useTheme, Card, Avatar, styled } from "@mui/material";
import { FiDownload } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import StyledButton from "@/components/buttons/StyledButton";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(6, 73, 4, 0.63)",
  boxShadow: "0 4px 6px rgba(82, 187, 41, 0.1)"
}));


export const Header = () => (
  
<StyledAppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box component="img" 
               src="/logoGB_White.png"
               alt="Company Logo"
               sx={{ height: 40, width: "auto" }}
               onError={(e) => {
                 e.target.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3";
               }}
          />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {["Features", "Pricing", "About", "Contact"].map((item) => (
              <Button 
                key={item}
                color="inherit"
                aria-label={`Navigate to ${item}`}
              >
                {item}
              </Button>
            ))}
          </Box>
          <StyledButton
            variant="contained"
            color="secondary"
            aria-label="Start free trial"
          >
            Start Free Trial
          </StyledButton>
        </Toolbar>
      </StyledAppBar>
  /*
  <AppBar position="static" color="#DDDDDD">
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Link href="/" passHref>
          <Box component="a" sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logoGB.png" alt="Logo" width={120} height={40} />
          </Box>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit">About</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button color="inherit">Contact</Button>
        </Link>
      </Box>
    </Toolbar>
  </AppBar> */
);
