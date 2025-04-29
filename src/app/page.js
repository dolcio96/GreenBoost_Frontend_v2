import Image from "next/image";

import DefaultLayout from '@layouts/DefaultLayouts';
import { Box, Typography, Button, Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import ScrollableVideo from "@/components/ScrollableVideo";
import Pricing from "@/components/Pricing/page";
import Partners from "@/components/Partners/page";
import New from "@/components/New";
import Link from 'next/link';
import { Body } from '@components/Body';
import HeroSection from '@components/Hero';
import CallToAction from "@components/CallToAction/page";
import HowItWorks from "@/components/HowItWorks/page";
import theme from '@utils/theme'; // Adjust the path as necessary
import ThemeRegistry from "@/components/ThemeRegistry"; // Nuovo wrapper
import Benefits from "@/components/Benefits/page";
import Features from "@/components/Features/page";
import '@fontsource/rajdhani';
const HomePage = () => (
  // <ThemeProvider theme={theme}> {/* Wrap the content with ThemeProvider */}
  <ThemeRegistry>

    <DefaultLayout>
      <HeroSection />
      <ScrollableVideo />



      <Box component="main" sx={{ width: "98%", textAlign: "center", margin: "auto" }}>
        <Benefits />
        <Features />
        <HowItWorks />
        <Box height={"60vh"} sx={{ py: 8, backgroundColor: "transparent" }} />
        <Partners />
        <Pricing />
        <CallToAction />
      </Box>

    </DefaultLayout>
  </ThemeRegistry>
);

export default HomePage;


