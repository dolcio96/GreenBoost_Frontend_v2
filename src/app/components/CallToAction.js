'use client';

import { Box, Container, Typography, Button } from "@mui/material";

const CallToAction = () => {
  return (
    <Box component="section" sx={{ py: 10,color: "white", backgroundColor: "#111827", textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Transform Your Sustainability Strategy?
        </Typography>
        <Typography variant="h6" color="gray" mb={4}>
          Join leading companies already using D4D to drive their sustainability initiatives
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ px: 4, py: 2, borderRadius: "8px", fontSize: "1.125rem" }}
        >
          Start Your Free Trial
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
