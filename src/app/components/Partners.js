"use client";

import { useState } from "react";
import { Box, Container, Typography, IconButton, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";

const logos = [
  "https://public.readdy.ai/ai/img_res/12a7a086ef8cb6ad2cd3ee249037f09f.jpg",
  "https://public.readdy.ai/ai/img_res/8c4a1b5b7940b216b1ef959f557fb9a2.jpg",
  "https://public.readdy.ai/ai/img_res/74cb6ae09ba49e562dd0515f000dcbb0.jpg",
  "https://public.readdy.ai/ai/img_res/1c8371d2e2ecbd84473fc36ae74a8415.jpg",
  "https://public.readdy.ai/ai/img_res/5067e0d97e4f0345e5f62bcfe741bd38.jpg",
  "https://public.readdy.ai/ai/img_res/6f96eed69ea4681231b2960bac479abd.jpg"
];

 const Partners = () => {
  const [index, setIndex] = useState(0);
  const isMedium = useMediaQuery("(max-width:960px)");
  const isSmall = useMediaQuery("(max-width:600px)");

  const itemsToShow = isSmall ? 2 : isMedium ? 4 : 5;
  const totalSlides = logos.length - itemsToShow;

  const moveSlider = (direction) => {
    setIndex((prev) => {
      if (direction === "next") return prev < totalSlides ? prev + 1 : 0;
      return prev > 0 ? prev - 1 : totalSlides;
    });
  };

  return (
    <Box sx={{ py: 10, backgroundColor: "#111827", color: "white", textAlign: "center" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" mb={2}>Trusted by Industry Leaders</Typography>
        <Typography variant="h6" color="gray" mb={4}>
          Leading companies partnering with us for sustainable transformation
        </Typography>
        <Box position="relative" overflow="hidden">
          <motion.div
            animate={{ x: `-${index * (100 / itemsToShow)}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ display: "flex" }}
          >
            {logos.map((logo, i) => (
              <Box key={i} flexShrink={0} width={`${100 / itemsToShow}%`} px={2} display="flex" justifyContent="center">
                <img src={logo} alt={`Partner Logo ${i + 1}`} style={{ maxHeight: 60, objectFit: "contain", filter: "grayscale(100%)", transition: "filter 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%)"}
                  onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"}
                />
              </Box>
            ))}
          </motion.div>
          <IconButton onClick={() => moveSlider("prev")} sx={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", color: "white", backgroundColor: "rgba(0,0,0,0.5)", '&:hover': { backgroundColor: "rgba(0,0,0,0.8)" } }}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={() => moveSlider("next")} sx={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", color: "white", backgroundColor: "rgba(0,0,0,0.5)", '&:hover': { backgroundColor: "rgba(0,0,0,0.8)" } }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;