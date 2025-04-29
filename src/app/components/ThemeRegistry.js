"use client";  // Questo dice a Next.js che è un componente Client

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@utils/theme";

const ThemeRegistry = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegistry;
