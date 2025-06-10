import React, { useState } from "react";
import { Box, Container, Button, Typography, TextField, IconButton, Grid, Paper, Tooltip } from "@mui/material";
import { CheckCircleOutline, CalendarToday, LinkedIn, FileCopy } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";

const ThankYouPage = () => {
  const theme = useTheme();

  const [helpOpen, setHelpOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);

  const handleHelpClick = () => {
    setHelpOpen(!helpOpen);
  };

  const handleContactClick = () => {
    setEmailOpen(!emailOpen);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied!");
    });
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.dark , minHeight: "100vh", color: "white" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ bgcolor: theme.palette.background.light, py: 4, boxShadow: 2 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <img
                src="https://static.readdy.ai/image/70b99b3eaebdc1fdb621b0a4134f7368/5a932e60f265ad5ad42890c887979771.png"
                alt="Logo"
                style={{ height: "64px" }}
              />
            </Grid>
            <Grid item>
              <Button onClick={handleHelpClick} sx={{ color: "white", fontSize: "16px" }}>
                Help
              </Button>
              {helpOpen && (
                <Paper sx={{ position: "absolute", top: "60px", right: 0, padding: 2, bgcolor: theme.palette.background.light }}>
                  <TextField
                    label="Describe your problem"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ bgcolor: theme.palette.background.dark , color: "white" }}
                  />
                  <Button sx={{ bgcolor: "#34D399", color: "white", mt: 2 }}>Send</Button>
                </Paper>
              )}
            </Grid>
            <Grid item>
              <Button onClick={handleContactClick} sx={{ color: "white", fontSize: "16px" }}>
                Contact
              </Button>
              {emailOpen && (
                <Paper sx={{ position: "absolute", top: "60px", right: 0, padding: 2, bgcolor: theme.palette.background.light }}>
                  <Typography sx={{ color: "white" }}>info@greenboost.it</Typography>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Box>

        {/* Main Section */}
        <Paper sx={{ backgroundColor: theme.palette.background.light, padding: 4, boxShadow: 3, marginBottom: 4 }}>
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ display: "inline-block", backgroundColor: "#34D399", borderRadius: "50%", p: 2, mb: 2 }}>
              <CheckCircleOutline sx={{ color: "#10B981", fontSize: 40 }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Thank You!
            </Typography>
            <Typography variant="h6" sx={{ color: "#D1D5DB", mb: 2 }}>
              Your registration has been successfully completed. We're thrilled to welcome you to our community!
            </Typography>
            <Typography variant="body1" sx={{ color: "#9CA3AF", mb: 4 }}>
              D4D is currently under development and not yet available on the market. We're in the demo phase and actively looking for valuable feedback.
              If you're interested, we’d love to show you a preview of how D4D will transform sustainability reports into actionable insights — powered by AI, sector benchmarking, and real-world best practices.
            </Typography>
            <Button variant="contained" color={theme.palette.secondary.main}  sx={{ px: 4, py: 2 }}>
              <CalendarToday sx={{ mr: 1 }} />
              Book a Demo
            </Button>
          </Box>
        </Paper>

        {/* Video Section */}
        <Paper sx={{ backgroundColor: theme.palette.background.light, padding: 4, boxShadow: 3, marginBottom: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
            Why ESG Data Needs AI
          </Typography>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Button variant="contained" sx={{ backgroundColor: "#4CAF50", padding: "10px 20px" }}>
              <i className="ri-play-fill" style={{ fontSize: "24px", color: "white" }}></i>
            </Button>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark  }}>
                <Typography variant="h6" sx={{ color: "#10B981", mb: 2 }}>87%</Typography>
                <Typography sx={{ color: "#D1D5DB" }}>of sustainability reports lack comparability</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark  }}>
                <Typography variant="h6" sx={{ color: "#F87171", mb: 2 }}>
                  <i className="ri-time-line" style={{ color: "#F87171", fontSize: "24px" }}></i>
                </Typography>
                <Typography sx={{ color: "#D1D5DB" }}>Manual data extraction is time-consuming and error-prone</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 3, backgroundColor: theme.palette.background.dark  }}>
                <Typography variant="h6" sx={{ color: "#34D399", mb: 2 }}>
                  <i className="ri-rocket-line" style={{ color: "#34D399", fontSize: "24px" }}></i>
                </Typography>
                <Typography sx={{ color: "#D1D5DB" }}>D4D automates extraction, benchmarking, and action planning</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* Contact Section */}
        <Paper sx={{ backgroundColor: theme.palette.background.light, padding: 4, boxShadow: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: theme.palette.background.dark , p: 2, borderRadius: 1 }}>
              <Typography sx={{ color: "#D1D5DB", mr: 2 }}>info@greenboost.it</Typography>
              <Tooltip title="Copy">
                <IconButton onClick={() => copyToClipboard("info@greenboost.it")} sx={{ color: "#D1D5DB" }}>
                  <FileCopy />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography sx={{ color: "#D1D5DB", mb: 2 }}>Connect with us on social media</Typography>
            <IconButton href="#" sx={{ bgcolor: theme.palette.background.dark , padding: 2, color: "#0A66C2", '&:hover': { bgcolor: "#0A66C2", color: "white" } }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ThankYouPage;
