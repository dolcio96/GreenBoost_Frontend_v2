// components/ThemeRegistry.jsx
"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#0d66d3", light: "#0d66d345", dark: "#3b5563", contrastText: "#fff" },
    secondary: { main: "#76c5f9", light: "#76c5f940", dark: "#111827", contrastText: "#fff" },
    error: { main: "#f44336" },
    warning: { main: "#ff9800" },
    info: { main: "#2196f3" },
    success: { main: "#0af512" },
    background: {light: "#152D37", dark: "#0B171C",
      default: "#111827",
      paper: "#ffffff",
    },
    text: {
      primary: "#fff",
      secondary: "#8C8B8C",
      tertiary: "#0B171C",
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Arial", sans-serif',
  },
});

const ThemeRegistry = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegistry;
