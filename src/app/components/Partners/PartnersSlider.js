"use client";

import { Box, useMediaQuery } from "@mui/material";

const logos = [
  "/partner/logo_net0.png",
  "/partner/logo_Puro.png",
  "/partner/logo_Biocarbon_2.png",
  "/partner/logo_CSMT.png",
  "/partner/logo_Exomad_1.png",
  "/partner/logo_Novocarbo.png",
  "/partner/logo_GM_Ambiente.png",
  "/partner/logo_Sorma.png",
];

const PartnersSlider = () => {
  const isMedium = useMediaQuery("(max-width:960px)");
  const isSmall = useMediaQuery("(max-width:600px)");
  const itemsToShow = isSmall ? 2 : isMedium ? 4 : 5;

  const duplicatedLogos = [...logos, ...logos]; // necessaria per loop continuo

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        "&:hover .slider-track": {
          animationPlayState: "paused",
        },
      }}
    >
      <Box
        className="slider-track"
        sx={{
          display: "flex",
          width: "fit-content",
          animation: "scroll-left 30s linear infinite",
        }}
      >
        {duplicatedLogos.map((logo, i) => (
          <Box
            key={i}
            flexShrink={0}
            width={`${100 / itemsToShow}%`}
            px={2}
            display="flex"
            justifyContent="center"
          >
            <img
              src={logo}
              alt={`Partner Logo ${i + 1}`}
              style={{
                maxHeight: 100,
                objectFit: "contain",
                filter: "grayscale(100%)",
                transition: "filter 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
            />
          </Box>
        ))}
      </Box>

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default PartnersSlider;
