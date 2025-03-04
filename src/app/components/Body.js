import { Container, Typography, Box, Button, Grid } from '@mui/material';
import Link from 'next/link';

export const Body = () => (
  <Container component="main" sx={{ my: 4 }}>
    {/* Hero Section */}
    <Box
      sx={{
        position: 'relative',
        height: 400,
        backgroundImage: 'url(/path/to/your/image.jpg)', // Aggiungi un'immagine di sfondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
        Benvenuti nel nostro sito!
      </Typography>
    </Box>

    {/* Sections in sovraimpressione */}
    <Grid container spacing={4} sx={{ mt: 4 }}>
      <Grid item xs={12} sm={4}>
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: 2,
              borderRadius: 1,
            }}
          >
            <Link href="/page1" passHref>
              <Button variant="contained" color="primary">
                Vai alla Pagina 1
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: 2,
              borderRadius: 1,
            }}
          >
            <Link href="/page2" passHref>
              <Button variant="contained" color="secondary">
                Vai alla Pagina 2
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: 2,
              borderRadius: 1,
            }}
          >
            <Link href="/page3" passHref>
              <Button variant="contained" color="error">
                Vai alla Pagina 3
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>

    {/* Content Section */}
    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
      Questo è un esempio di una semplice homepage costruita con Next.js e Material-UI.
    </Typography>
    <Typography variant="body1" paragraph>
      Esplora il nostro sito per scoprire tutte le funzionalità. Clicca sui pulsanti qui sopra per iniziare.
    </Typography>
  </Container>
);
