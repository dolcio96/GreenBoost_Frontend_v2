"use client";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme, customColor }) => ({
  borderRadius: 30,
  padding: "12px 30px",
  textTransform: "none",
  fontSize: "1.1rem",
  backgroundColor: customColor || theme.palette.primary.main, // Se customColor è passato, usalo, altrimenti usa il colore principale
  color: theme.palette.common.white,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    backgroundColor: theme.palette.primary.dark,
  }
}));

export default StyledButton;
