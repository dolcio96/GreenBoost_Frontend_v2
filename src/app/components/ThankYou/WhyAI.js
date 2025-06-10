import React from "react";
import { Paper, Typography, Box, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const WhyAISection = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ backgroundColor: theme.palette.background.light, padding: 4, boxShadow: 3, marginBottom: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
        Why ESG Data Needs AI
      </Typography>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Button variant="contained" sx={{ backgroundColor: "#4CAF50", padding: "10px 20px" }}>
          <i className="ri-play-fill" style={{ fontSize: "24px", color: theme.palette.text.primary }}></i>
        </Button>
      </Box>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: "#10B981", mb: 2 }}>87%</Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>of sustainability reports lack comparability</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: "#F87171", mb: 2 }}>
              <i className="ri-time-line" style={{ color: "#F87171", fontSize: "24px" }}></i>
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>Manual data extraction is time-consuming and error-prone</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: "#34D399", mb: 2 }}>
              <i className="ri-rocket-line" style={{ color: "#34D399", fontSize: "24px" }}></i>
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>D4D automates extraction, benchmarking, and action planning</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WhyAISection;
