import React from "react";
import { Box, Grid, Button, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HeaderThankYou = ({ handleHelpClick, handleContactClick, helpOpen, emailOpen }) => {
  const theme = useTheme();
  return (  
  <Paper sx={{ backgroundColor: theme.palette.background.light, padding: 4, boxShadow: 3, marginBottom: 4 }}>
   
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <img
            src="/LogoD4DChiaro.svg"
            alt="Company Logo"
            style={{ height: "64px" }}
          />
        </Grid>
        <Grid item>
          <Button onClick={handleHelpClick} sx={{ color: theme.palette.text.primary, fontSize: "16px" }}>
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
                sx={{ bgcolor: theme.palette.background.dark , color: theme.palette.text.primary }}
              />
              <Button sx={{ bgcolor: "#34D399", color: theme.palette.text.primary, mt: 2 }}>Send</Button>
            </Paper>
          )}
        </Grid>
        <Grid item>
          <Button onClick={handleContactClick} sx={{ color: theme.palette.text.primary, fontSize: "16px" }}>
            Contact
          </Button>
          {emailOpen && (
            <Paper sx={{ position: "absolute", top: "60px", right: 0, padding: 2, bgcolor: theme.palette.background.light }}>
              <Typography sx={{ color: theme.palette.text.primary }}>info@greenboost.it</Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
   </Paper>
  );
};

export default HeaderThankYou;
