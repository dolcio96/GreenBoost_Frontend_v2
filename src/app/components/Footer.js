import { Box, Button, Typography, Container } from '@mui/material';
import Link from 'next/link';

export const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 3, mt: 4 }}>
    <Container>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Il Mio Sito. Tutti i diritti riservati.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
        <Link href="/privacy" passHref>
          <Button color="inherit">Privacy Policy</Button>
        </Link>
        <Link href="/terms" passHref>
          <Button color="inherit">Termini e Condizioni</Button>
        </Link>
      </Box>
    </Container>
  </Box>
);