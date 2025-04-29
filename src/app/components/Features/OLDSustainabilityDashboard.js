import React from "react";
import { Box, Card, Grid, Typography,useTheme } from "@mui/material";

const SustainabilityDashboard = () => {
    const theme = useTheme();
  return (
    <Card sx={{ backgroundColor: theme.palette.background.dark, p: 3, border: "1px solid #374151", borderRadius: 2, height: "100%" }}>
      <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
        Sustainability Dashboard
      </Typography>
      <Typography color="gray.400" mb={2}>
        Track and analyze your environmental impact with our comprehensive sustainability dashboard.
      </Typography>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#1f2937", border: "1px solid #374151", p: 2 }}>
            <Typography variant="body2" color="gray.400" mb={1}>
              Scope 1
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="green.500" mb={1}>
              -15%
            </Typography>
            <Typography variant="body2" color="gray.400">
              vs. Last Year
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#1f2937", border: "1px solid #374151", p: 2 }}>
            <Typography variant="body2" color="gray.400" mb={1}>
              Scope 2
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="yellow.500" mb={1}>
              -8%
            </Typography>
            <Typography variant="body2" color="gray.400">
              vs. Last Year
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#1f2937", border: "1px solid #374151", p: 2 }}>
            <Typography variant="body2" color="gray.400" mb={1}>
              Scope 3
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="red.500" mb={1}>
              +2%
            </Typography>
            <Typography variant="body2" color="gray.400">
              vs. Last Year
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SustainabilityDashboard;
