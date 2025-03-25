'use client';
import { Box, Container, Grid, Typography, Link, Divider, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#1F2937", py: 6, color: "#E5E7EB" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" fontFamily="Pacifico" color="primary" display="flex" alignItems="center" gap={1}>
              D4D <Typography component="span" variant="body2" color="#808080">AI</Typography>
            </Typography>
            <Typography variant="body2" color="#808080">
              Empowering sustainable transformation through AI and data analytics.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Product</Typography>
            <Box>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Features</Link>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Pricing</Link>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Case Studies</Link>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Documentation</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Company</Typography>
            <Box>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>About</Link>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Blog</Link>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Careers</Link>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight={600}>Legal</Typography>
            <Box>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Privacy Policy</Link>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Terms of Service</Link>
              <Link href="#" color="#808080" display="block" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }}}>Cookie Policy</Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "#374151" }} />
        <Box display="flex" justifyContent="space-between" alignItems="center" pt={3}>
          <Typography variant="body2" color="#808080">© 2025 D4D. All rights reserved.</Typography>
          <Box>
            <IconButton href="#" color="#808080" sx={{ '&:hover': { color: 'primary.main' }}}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" color="#808080" sx={{ '&:hover': { color: 'primary.main' }}}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="#808080" sx={{ '&:hover': { color: 'primary.main' }}}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

