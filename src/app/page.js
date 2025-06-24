// ✅ HomePage.jsx corretto – usa solo ThemeRegistry
import DefaultLayout from '@layouts/DefaultLayouts';
import ThemeRegistry from "@/components/ThemeRegistry";
import { Box } from '@mui/material';
import ScrollableVideo from "@/components/ScrollableVideo";
import Pricing from "@/components/Pricing/page";
import Partners from "@/components/Partners/page";
import HeroSection from '@components/Hero';
import CallToAction from "@components/CallToAction/page";
import HowItWorks from "@/components/HowItWorks/page";
import Benefits from "@/components/Benefits/page";
import Features from "@/components/Features/page";
import AssistantChat from '@/components/AssistantChat';
import '@fontsource/rajdhani';
//import "@fontsource/be-vietnam-pro";
//import "@fontsource/outfit";
const HomePage = () => (
  <ThemeRegistry>
    <DefaultLayout>
      <HeroSection />
      <ScrollableVideo />
      <Box component="main" sx={{ width: "98%", textAlign: "center", margin: "auto" }}>
        <Benefits />
        <Features />
        <HowItWorks />
       {/*  <Box height={"5vh"} sx={{ py: 8, backgroundColor: "transparent" }} />*/}
        <AssistantChat/>
          <Box height={"1vh"} sx={{ py: 8, backgroundColor: "transparent" }} />
        <Partners />
        <Pricing />
        <CallToAction />
        
      </Box>
    </DefaultLayout>
  </ThemeRegistry>
);

export default HomePage;
