import Image from "next/image";

import DefaultLayout from '@layouts/DefaultLayouts';
import { Box, Typography, Button, Container, createTheme, ThemeProvider } from '@mui/material';

import Link from 'next/link';
import { Body } from '@components/Body';
import HeroSection from '@components/Hero'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733', // Replace this with your desired color hex
    },
  },
});

const HomePage = () => (
 // <ThemeProvider theme={theme}> {/* Wrap the content with ThemeProvider */}
    <DefaultLayout>
      <HeroSection></HeroSection>
      <Container component="main" sx={{ my: 4 }}>
      
      </Container>
    </DefaultLayout>
//  </ThemeProvider>
);

export default HomePage;


