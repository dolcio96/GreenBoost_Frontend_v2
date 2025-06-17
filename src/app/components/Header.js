"use client";
import React from "react";
import { Box, Button, Toolbar, AppBar, useTheme } from "@mui/material";
import StyledButton from "@/components/buttons/StyledButton";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export const Header = () => {
  const theme = useTheme(); // Usa il tema MUI

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.dark }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" passHref>
          <Box
            component="img"
            src="/LogoD4DChiaro.svg"
            alt="Company Logo"
            sx={{ height: 60, width: "auto", cursor: "pointer" }}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3";
            }}
          />
        </Link>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {["Benefits", "Features", "How it works", "Pricing"].map((item) => (
            <Button
              key={item}
              color="inherit"
              aria-label={`Navigate to ${item}`}
              sx={{
                fontSize: "1.3rem",
                fontWeight: 500,
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              <ScrollLink to={item.toLowerCase().trim().replace(/\s+/g, "")} smooth={true} duration={500} offset={-70}>
                {item}
              </ScrollLink>
            </Button>
          ))}
        </Box>
        <StyledButton
          variant="contained"
          href="/Registration"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.tertiary,
            "&:hover": {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.background.light,
              fontWeight: "bold",
            },
          }}
          aria-label="Get started"
        >
          Book a Demo
        </StyledButton>
      </Toolbar>
    </AppBar>
  );
};
