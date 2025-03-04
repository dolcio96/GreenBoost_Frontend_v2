"use client";
import React from "react";
import { Box, Container, Typography, Center, Card, CardContent } from "@mui/material";

import Link from "next/link";
import StyledButton from "@/components/buttons/StyledButton";
import { RxDashboard } from "react-icons/rx";


const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Dashboard
      </Typography>

    </Container>
  );
};

export default Dashboard;
