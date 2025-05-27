"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Element } from "react-scroll";
import {
  RiRobotLine,
  RiBarChartBoxLine,
  RiLineChartLine,
} from "react-icons/ri";

import BenefitCard from "./BenefitCard"; // Assicurati che il path sia corretto

const Benefits = () => {
  const theme = useTheme();
  return (
    <Element name="benefits" id="benefits" style={{ scrollMarginTop: "80px" }}>
      <Box id="benefits" py={10} sx={{ backgroundColor: theme.palette.background.dark }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ color: theme.palette.text.primary }}
            >
              Why Choose{" "}
              <Box
                component="img"
                src="/LogoD4DChiaro.svg"
                alt="Company Logo"
                sx={{
                  height: 100,
                  width: "auto",
                  display: "inline-block",
                  mx: -5,
                  verticalAlign: "middle",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1563986768609-322da13575f3";
                }}
              />
              ?
            </Typography>
            <Typography variant="h4" sx={{ color: theme.palette.text.secondary }}>
              Transform your sustainability journey with Data-4-Decarbonization, a cutting-edge platform to take data-driven decisions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <BenefitCard
                icon={<RiRobotLine />}
                title="AI-Powered Analysis"
                description="Advanced algorithms analyze your sustainability reports to extract actionable insights automatically"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <BenefitCard
                icon={<RiBarChartBoxLine />}
                title="Goal Setting & Forecasting"
                description="Set sustainability targets and leverage AI to forecast scenarios for achieving your ESG goals"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <BenefitCard
                icon={<RiLineChartLine />}
                title="Industry Benchmarking"
                description="Compare your performance against industry leaders and identify areas for improvement"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Element>
  );
};

export default Benefits;
