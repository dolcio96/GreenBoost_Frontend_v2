import React from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

const EmissionsOverview = () => {
  return (
    <Card sx={{ backgroundColor: "#1f2937", p: 3, border: "1px solid #374151", borderRadius: 2,  height: "100%" }}>
      <Typography variant="h6" fontWeight="bold" color="white" mb={2}>
        Emissions Overview
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button variant="text" color="secondary">
          Monthly
        </Button>
        <Button variant="contained" color="primary">
          Quarterly
        </Button>
        <Button variant="text" color="secondary">
          Yearly
        </Button>
      </Box>
      <div id="emissionsChart" style={{ width: "100%", height: "300px" }}></div>
      <Grid container spacing={1} mt={2}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#57B5E7" }} />
            <Typography variant="body2" color="gray.400">Your Company</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#8DD3C7" }} />
            <Typography variant="body2" color="gray.400">Industry Avg</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FBBF72" }} />
            <Typography variant="body2" color="gray.400">Target</Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EmissionsOverview;
