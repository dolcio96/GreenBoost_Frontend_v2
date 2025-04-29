'use client';
import { Box, Container, Grid, Typography, Link, Divider, IconButton, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  const theme = useTheme();

  // Componente interno FooterLink (senza tipi)
  const FooterLink = ({ href, children }) => (
    <Link
      href={href}
    
      display="block"
      sx={{
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        '&:hover': { color: theme.palette.secondary.main }
      }}
    >
      {children}
    </Link>
  );

  return (
    <Box component="footer" sx={{ bgcolor: theme.palette.background.light, py: 6, color: theme.palette.text.primary }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} md={3}    alignContent={"center"}
                    justifyContent={"center"} 
                     display="flex" flexDirection="column" alignItems="center">
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
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Company</Typography>
            <Box>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Legal</Typography>
            <Box>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#374151" }} />

        <Box display="flex" justifyContent="space-between" alignItems="center" pt={3}>
          <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
            © 2025 D4D. All rights reserved.
          </Typography>
          <Box>
            <IconButton href="#" sx={{ color: theme.palette.text.primary, '&:hover': { color: theme.palette.secondary.main } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.text.primary, '&:hover': { color: theme.palette.secondary.main } }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.text.primary, '&:hover': { color: theme.palette.secondary.main } }}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
