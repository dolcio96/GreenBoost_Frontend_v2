import React from "react";
import { Box, Card, Grid, Slider, Typography } from "@mui/material";

const ScenarioPlanning = ({ handleSliderChange }) => {
  return (
  <Card sx={{ backgroundColor: "#1f2937", p: 3, border: "1px solid #374151", borderRadius: 2, height: "100%" }}>
      <Typography variant="h6" fontWeight="bold" color="white" mb={2}>
        Scenario Planning
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2" color="gray.400">
            Scope 1 Emissions (tCO2e)
          </Typography>
          <Slider
            value={500}
            min={0}
            max={1000}
            onChange={handleSliderChange}
            aria-labelledby="scope1-slider"
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="scope1Value" color="primary">500</Typography>
            <Typography color="gray.500">Target: 400</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="gray.400">
            Scope 2 Emissions (tCO2e)
          </Typography>
          <Slider
            value={1000}
            min={0}
            max={2000}
            onChange={handleSliderChange}
            aria-labelledby="scope2-slider"
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="scope2Value" color="primary">1000</Typography>
            <Typography color="gray.500">Target: 800</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }} id="scenarioChart" style={{ width: "100%", height: "200px" }}></Box>
    </Card>
  );
};

export default ScenarioPlanning;
