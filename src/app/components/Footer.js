'use client';
import { useState } from "react";
import { Box, Container, Grid, Typography, Link, Divider, IconButton, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as ReactScrollLink } from "react-scroll";
import { styled } from "@mui/material/styles";
import ContactDialog from './ContactDialog';  // Importiamo il nuovo componente

export const Footer = () => {
  const theme = useTheme();  // Ottieni il tema
  const [openContactDialog, setOpenContactDialog] = useState(false);

  // Funzione per aprire il dialog
  const handleOpenContactDialog = (event) => {
    event.preventDefault();  // Previene il comportamento di navigazione
    setOpenContactDialog(true);
  };

  // Funzione per chiudere il dialog
  const handleCloseContactDialog = () => {
    setOpenContactDialog(false);
  };

  const FooterLink = ({ href, children, onClick }) => (
    <Link
      href={href}
      onClick={onClick}  // Aggiunta la gestione dell'evento onClick
      display="block"
      target="_blank"
      sx={{
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        '&:hover': { color: theme.palette.secondary.main }
      }}
    >
      {children}
    </Link>
  );

  const FooterScrollLink = styled(ReactScrollLink)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  }));

  return (
    <Box component="footer" sx={{ bgcolor: theme.palette.background.light, py: 6, color: theme.palette.text.primary }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} md={3} alignContent={"center"} justifyContent={"center"} display="flex" flexDirection="column" alignItems="center">
            <Box
              alignContent={"center"}
              justifyContent={"center"}
              component="img"
              src="/LogoD4DChiaro.svg"
              alt="Company Logo"
              sx={{ height: 60, width: "auto" }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3";
              }}
            />
            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
              Empowering sustainable transformation through AI and data analytics.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Product</Typography>
            <Box>
              <FooterLink href="#">Features</FooterLink>
              <FooterScrollLink to="pricing" smooth={true} duration={500} offset={-70}>Pricing</FooterScrollLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Company</Typography>
            <Box>
              <FooterLink href="https://www.greenboost.it/en">GreenBoost</FooterLink>
              <FooterLink href="#" onClick={handleOpenContactDialog}>Contact</FooterLink> {/* Cliccando su Contact, apre il pop-up */}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Legal</Typography>
            <Box>
              <FooterLink href="https://www.iubenda.com/privacy-policy/91965943">Privacy Policy</FooterLink>
              <FooterLink href="https://www.iubenda.com/privacy-policy/91965943/cookie-policy">Cookie Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#374151" }} />

        <Box display="flex" justifyContent="space-between" alignItems="center" pt={3}>
          <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
            © 2025 D4D. All rights reserved.
          </Typography>
          <Box>
            <IconButton href="https://www.linkedin.com/company/greenboost/" sx={{ color: theme.palette.text.primary, '&:hover': { color: theme.palette.secondary.main } }}>
              <LinkedInIcon />
            </IconButton>
            {/*<IconButton href="#" sx={{ color: theme.palette.text.primary, '&:hover': { color: theme.palette.secondary.main } }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.text.primary, '&:hover': { color: theme.palette.secondary.main } }}>
              <GitHubIcon />
            </IconButton>*/}
          </Box>
        </Box>
      </Container>

      {/* Passiamo il tema come prop al componente ContactDialog */}
      <ContactDialog open={openContactDialog} onClose={handleCloseContactDialog} theme={theme} />
    </Box>
  );
};
