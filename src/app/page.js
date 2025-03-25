import Image from "next/image";

import DefaultLayout from '@layouts/DefaultLayouts';
import { Box, Typography, Button, Container, createTheme, ThemeProvider } from '@mui/material';
import ScrollableVideo from "@/components/ScrollableVideo";
import InfoSection from "@/components/InfoSection";
import Pricing from "@/components/Pricing";
import Partners from "@/components/Partners";
import New from "@/components/New";
import Link from 'next/link';
import { Body } from '@components/Body';
import HeroSection from '@components/Hero';
import CallToAction from "@components/CallToAction";
import HowItWorks from "@components/HowItWorks";

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
    <HeroSection />
    <ScrollableVideo />
    <Box component="main" sx={{ width: "95%",  textAlign: "center", margin: "auto" }}>  
      <InfoSection />
      <Partners />
      <HowItWorks/>
      <Pricing />
      <New />
      <CallToAction />
    </Box>
   
  </DefaultLayout>
  //  </ThemeProvider>
);

export default HomePage;


