import React, { useState } from "react";
import { Box, Container, Button, Typography, TextField, IconButton, Grid, Paper, Tooltip } from "@mui/material";
import { CheckCircleOutline, CalendarToday, LinkedIn, FileCopy } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";
import ThankYouMainSection from "./Thank.js";
import WhyAISection from "./WhyAI.js";
import ContactUsSection from "./ContactUs.js";
import CalendarBookingSection from "./CalendarBookingSection.js";

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
    navigator.clipboard.writeText(text);
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.dark , minHeight: "100vh", color: theme.palette.text.primary }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>

        {/* Main Section */}
        <ThankYouMainSection />

        <CalendarBookingSection userName={"userName"} userEmail={"userEmail"} userCompany={"userCompany"} />

        {/* Video Section */}
        <WhyAISection />

        {/* Contact Section */}
        <ContactUsSection copyToClipboard={copyToClipboard} />
      </Container>
    </Box>
  );
};

export default ThankYouPage;
