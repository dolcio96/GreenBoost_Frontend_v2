"use client";
import { Container, Box, Typography } from "@mui/material";

const InfoSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%", // Imposta la larghezza all'80%
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1F2937",
        margin: "0 auto", // Centra orizzontalmente
      }}
    >
      <Container maxWidth={false} sx={{ width: "100%" }}> {/* Assicura che il contenuto si espanda al 100% della Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            p: 4,
          }}
        >
          {/* Video a sinistra */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <video
              src="/example.mp4"
              controls
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            />
          </Box>

          {/* Testo a destra */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h4" fontWeight="bold" color="white">
              Scopri la nostra storia
            </Typography>
            <Typography variant="body1" color="white" mt={2}>
              Esplora il nostro viaggio attraverso paesaggi mozzafiato e storie
              incredibili. Guarda il video per saperne di più!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InfoSection;
