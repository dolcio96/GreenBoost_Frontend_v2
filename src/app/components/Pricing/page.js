"use client";
import React from "react";
import { Container, Grid, Typography, Box, useTheme } from "@mui/material";
import { Element } from "react-scroll";

import PricingCard from "./PricingCard"; // assicurati che il path sia corretto

const plans = [
  {
    name: "Free",
    icon:"🔓",
    price: "Start your journey",//"€0",
    duration: "/year",
    features: [
      "Upload sustainability reports",
      "Basic KPI visualization",
      "Traffic-light indicators",
      "Scope 1, 2, 3 emissions tracking",
      "Marketplace access",
    ],
    buttonText: "Get Started",
    buttonVariant: "outlined",
  },
  {
    name: "Base",
    icon:"🛠",
    price: "Benchmark & Improve",//"€3,000",
    duration: "/year",
    features: [
      "All Free features",
      "Sector benchmark positioning",
      "Interactive KPI dashboards",
      "Sustainability best practices",
      "Regulatory risk assessments",
      "Marketplace access",
    ],
    buttonText: "Get Started",
    buttonVariant: "outlined",
  },
  {
    name: "Premium",
    icon:"🚀",
    price: "Plan & Forecast",//"€5,000",
    duration: "/year",
    features: [
      "All Base features",
      "Two additional clusters",
      "Company comparisons",
      "Personalized KPI goals",
      "Advanced forecasting",
      "Scenario creation",
    ],
    buttonText: "Get Started",
    buttonVariant: "contained",
    popular: true,
  },
  {
    name: "Enterprise",
    icon:"🧠",
    price: "Tailored for Leaders",//"Custom",
    duration: "pricing",
    features: [
      "All Premium features",
      "Full cluster access",
      "Complete D4D database access",
      "Tailored solutions",
      "Dedicated support",
      "Custom integration",
      "Priority features",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outlined",
  },
];

const Pricing = () => {
  const theme = useTheme();

  return (
    <Element name="pricing" id="pricing">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          bgcolor: theme.palette.background.light,
       
        }}
      >
        <Container>
          <Box textAlign="center" mb={5}>
            <Typography variant="h3" fontWeight="bold" color={theme.palette.text.primary}>
              Choose Your Plan
            </Typography>
            <Typography variant="h4" color={theme.palette.text.secondary}>
              Select the perfect plan for your sustainability journey
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {plans.map((plan) => (
              <Grid item xs={12} sm={6} md={3} key={plan.name}>
                <PricingCard plan={plan} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Element>
  );
};

export default Pricing;
