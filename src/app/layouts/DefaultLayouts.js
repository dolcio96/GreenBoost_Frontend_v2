import { Header } from '@/components/Header';
import { Footer } from '@components/Footer';
import { Box } from '@mui/material';

// Layout di default che include sempre l'Header e il Footer
const DefaultLayout = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Box component="main" sx={{ flexGrow: 1 }}>
      {children}
    </Box>
    <Footer />
  </Box>
);

export default DefaultLayout;