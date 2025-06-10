import React, { useState } from "react";
import { Box, Container, Button, Typography, TextField, IconButton, Grid, Paper, Tooltip } from "@mui/material";
import { CheckCircleOutline, CalendarToday, LinkedIn, FileCopy } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";
import HeaderThankYou from "./headerThankYou";
import ThankYouMainSection from "./Thank.js";
import WhyAISection from "./WhyAI.js";
import ContactUsSection from "./ContactUs.js";

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
    <Box sx={{ backgroundColor: theme.palette.background.dark , minHeight: "100vh", color: theme.palette.text.primary }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <HeaderThankYou
          handleHelpClick={handleHelpClick}
          handleContactClick={handleContactClick}
          helpOpen={helpOpen}
          emailOpen={emailOpen}
        />

        {/* Main Section */}
        <ThankYouMainSection />

        {/* Video Section */}
        <WhyAISection />

        {/* Contact Section */}
        <ContactUsSection copyToClipboard={copyToClipboard} />
      </Container>
    </Box>
  );
};

export default ThankYouPage;
