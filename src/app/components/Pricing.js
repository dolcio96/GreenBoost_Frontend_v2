import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Box, Chip } from "@mui/material";

const plans = [
  {
    name: "Free",
    price: "€0",
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
    price: "€3,000",
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
    price: "€5,000",
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
    price: "Custom",
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

const PricingSection = () => {
  return (
    <Box sx={{
        position: "relative",
        width: "100%", // Imposta la larghezza all'80%
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto", // Centra orizzontalmente
      }} py={10}  bgcolor="#111827" color="white" >
      <Container>
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" fontWeight="bold">
            Choose Your Plan
          </Typography>
          <Typography variant="subtitle1" color="grey.400">
            Select the perfect plan for your sustainability journey
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={3} key={plan.name}>
              <Card sx={{ bgcolor: "#1F2937",borderRadius: "20px",  border: plan.popular ? 2 : 1, borderColor: plan.popular ? "primary.main" : "grey.700", position: "relative", height: 400, display: "flex", flexDirection: "column" }}>
                {plan.popular && (
                  <Chip label="Most Popular" color="primary" sx={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)" }} />
                )}
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {plan.name}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" mt={2}>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="grey.400">
                    {plan.duration}
                  </Typography>
                  <Box mt={3} flexGrow={1}>
                    {plan.features.map((feature, index) => (
                      <Typography key={index} variant="body2" color="grey.300" gutterBottom>
                        ✓ {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
                  <Button fullWidth variant={plan.buttonVariant} color="primary">
                    {plan.buttonText}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;