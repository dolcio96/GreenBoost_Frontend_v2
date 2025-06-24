import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { CheckCircleOutline, CalendarToday } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const ThankYouMainSection = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ backgroundColor: theme.palette.background.light, padding: 4, boxShadow: 3, marginBottom: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ display: "inline-block", backgroundColor: theme.palette.success.main, borderRadius: "50%", p: 2, mb: 2 }}>
          <CheckCircleOutline sx={{ color: theme.palette.text.primary, fontSize: 40 }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Thank You!
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
          Your registration has been successfully completed. We're thrilled to welcome you to our community!
        </Typography>
        <Typography variant="body1" sx={{ color: "#9CA3AF", mb: 4 }}>
          D4D is currently under development and not yet available on the market. We're in the demo phase and actively looking for valuable feedback.
          If you're interested, we’d love to show you a preview of how D4D will transform sustainability reports into actionable insights — powered by AI, sector benchmarking, and real-world best practices.
        </Typography>
      </Box>
    </Paper>
  );
};

export default ThankYouMainSection;
