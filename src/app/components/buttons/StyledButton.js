"use client";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: "12px 30px",
  textTransform: "none",
  fontSize: "1.1rem",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)"
  }
}));

export default StyledButton;