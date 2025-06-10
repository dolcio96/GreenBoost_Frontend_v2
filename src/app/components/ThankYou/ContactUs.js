import React from "react";
import { Paper, Typography, Box, Tooltip, IconButton } from "@mui/material";
import { LinkedIn, FileCopy } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const ContactUsSection = ({ copyToClipboard }) => {
  const theme = useTheme();
  return (
    <Paper sx={{ backgroundColor: theme.palette.background.light, padding: 4, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
        Contact Us
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: theme.palette.background.dark,
          p: 2,
          borderRadius: 1,
          gap: 1
        }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: theme.palette.text.secondary, mr: 2 }}>info@greenboost.it</Typography>
            <Tooltip title="Copy">
              <IconButton onClick={() => copyToClipboard("info@greenboost.it")} sx={{ color: theme.palette.text.secondary }}>
                <FileCopy />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: theme.palette.text.secondary, mr: 2 }}>enrico.martini@greenboost.it</Typography>
            <Tooltip title="Copy">
              <IconButton onClick={() => copyToClipboard("enrico.martini@greenboost.it")} sx={{ color: theme.palette.text.secondary }}>
                <FileCopy />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography sx={{ color: theme.palette.text.secondary, mb: 2 }}>Connect with us on social media</Typography>
        <IconButton  href="https://www.linkedin.com/company/greenboost/" sx={{ bgcolor: theme.palette.background.dark , padding: 2, color: theme.palette.secondary.main, '&:hover': { bgcolor: theme.palette.secondary.main, color: theme.palette.background.dark } }}>
          <LinkedIn />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ContactUsSection;
