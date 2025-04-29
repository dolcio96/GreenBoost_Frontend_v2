'use client';

import { Box, Container, Typography, Button,useTheme } from "@mui/material";

const CallToAction = () => {
        const theme = useTheme();
  return (
    <Box component="section" sx={{ py: 10,color: theme.palette.text.primary, backgroundColor: theme.palette.background.dark, textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Transform Your Sustainability Strategy?
        </Typography>
        <Typography variant="h5" color={ theme.palette.text.secondary} mb={4}>
          Join leading companies already using D4D to drive their sustainability initiatives
        </Typography>
       
             <Button fullWidth 
              variant="contained"  sx={{
              px: 4, py: 2,
                            borderRadius: "10px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            bgcolor:  theme.palette.secondary.main ,
                            color:  theme.palette.text.tertiary ,
                            borderColor:  theme.palette.secondary.main ,
                            "&:hover": {
                                bgcolor: theme.palette.primary.dark ,
                                color: theme.palette.text.primary,
                            },
                        }}
                        >
          Start Your Free Trial
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
