"use client";
import React, { useState, useCallback } from "react";
import { Box, Card, CardContent, TextField, Checkbox, FormControlLabel, Button, Typography, Grid, FormGroup, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip, FormHelperText } from "@mui/material";
import DefaultLayout from '@layouts/DefaultLayouts';
import ThemeRegistry from "@/components/ThemeRegistry";
import RegistrationForm from "@components/registrationForm/page";

const Registration = () => {

  return (
    <ThemeRegistry>
      <DefaultLayout>
        <Box component="main" sx={{ p:8, width: "98%", margin: "auto" }}>

          <RegistrationForm />
        </Box>
      </DefaultLayout>
    </ThemeRegistry>
  );
};

export default Registration;