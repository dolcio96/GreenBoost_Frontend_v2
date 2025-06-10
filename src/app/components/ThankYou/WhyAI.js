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
   
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: theme.palette.success.main, mb: 2 }}>-60% emissions per m²</Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>AI fine-tunes energy use and cooling in real time, turning data centers into engines of sustainability</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
         <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: theme.palette.success.main, mb: 2 }}>Up to 90% faster ESG reporting</Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>AI cleans and structures data, automates disclosures, and slashes the risk of greenwashing</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
         <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: theme.palette.success.main, mb: 2 }}>100% supply chain visibility</Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>Satellite-powered AI uncovers hidden environmental risks and turns blind spots into action plans</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WhyAISection;
