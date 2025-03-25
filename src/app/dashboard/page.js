"use client";
import React, { useState, useCallback } from "react";
import { Box, Card, CardContent, TextField, Checkbox, FormControlLabel, Button, Typography, Grid, FormGroup, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip, FormHelperText } from "@mui/material";
import { styled } from "@mui/system";
import { FiHelpCircle } from "react-icons/fi";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: "2rem auto",
  padding: "2rem",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "translateY(-5px)"
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: "1rem 0.5rem",
  padding: "0.5rem 2rem",
  transition: "all 0.3s ease"
}));

const DropZone = styled(Box)(({ theme }) => ({
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  minHeight: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fafafa",
  "&:hover": {
    borderColor: theme.palette.primary,
    backgroundColor: "#f0f0f0"
  }
}));

const Dashboard = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    features: {
      dataAnalytics: false,
      userManagement: false,
      reportingTools: false,
      customerSupport: false,
      integrationCapabilities: false
    },
    termsAccepted: false,
    pdfFile: null
  });

  const [errors, setErrors] = useState({});
  const [openResetDialog, setOpenResetDialog] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  }, []);

  const handleCheckboxChange = useCallback((e) => {
    const { name, checked } = e.target;
    if (name === "termsAccepted") {
      setFormData(prev => ({
        ...prev,
        termsAccepted: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        features: {
          ...prev.features,
          [name]: checked
        }
      }));
    }
  }, []);

  const handleFileDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setFormData(prev => ({
        ...prev,
        pdfFile: file
      }));
    }
  }, []);

  const handleFileSelect = useCallback((e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData(prev => ({
        ...prev,
        pdfFile: file
      }));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Email is required";
    } else if (!validateEmail(formData.companyEmail)) {
      newErrors.companyEmail = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      companyEmail: "",
      features: {
        dataAnalytics: false,
        userManagement: false,
        reportingTools: false,
        customerSupport: false,
        integrationCapabilities: false
      },
      termsAccepted: false,
      pdfFile: null
    });
    setErrors({});
    setOpenResetDialog(false);
  };

  const isFormValid = () => {
    return (
      formData.companyName.trim() &&
      validateEmail(formData.companyEmail) &&
      formData.termsAccepted
    );
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: "2rem" }}>
      <StyledCard sx={{ textAlign: "center" }} elevation={0}> 
         <Box
                    component="video"
                    src="/Dash.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: 4,
                      boxShadow: "0 20px 40px rgba(39, 204, 80, 0.3)"
                    }}
                    onError={(e) => {
                      e.target.src = "https://www.w3schools.com/html/mov_bbb.mp4";
                    }}
                    />
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Company Dashboard Registration
          </Typography>

          <Typography variant="h6" gutterBottom>
         Condividi il tuo bilancio di sostenibilità e scopri dove è posizionata la tua azienda rispetto al mercato.
          </Typography>


          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                error={!!errors.companyName}
                helperText={errors.companyName}
                required
                InputProps={{
                  "aria-label": "Company Name"
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Email"
                name="companyEmail"
                type="email"
                value={formData.companyEmail}
                onChange={handleInputChange}
                error={!!errors.companyEmail}
                helperText={errors.companyEmail}
                required
                InputProps={{
                  "aria-label": "Company Email"
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Select Features
                <Tooltip title="Choose the features you want to enable for your dashboard">
                  <Box component="span" sx={{ ml: 1 }}>
                    <FiHelpCircle />
                  </Box>
                </Tooltip>
              </Typography>
              <FormGroup>
                {Object.entries({
                  dataAnalytics: "Net Zero Dashboard",
                  userManagement: "Carbon Marketplace",
                  reportingTools: "Carbon Removal Methods",
                  customerSupport: "-----------------",
                  integrationCapabilities: "--------------"
                }).map(([key, label]) => (
                  <FormControlLabel
                    key={key}
                    control={
                      <Checkbox
                        checked={formData.features[key]}
                        onChange={handleCheckboxChange}
                        name={key}
                      />
                    }
                    label={label}
                  />
                ))}
              </FormGroup>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    name="termsAccepted"
                    required
                  />
                }
                label="I agree to the terms and conditions"
              />
              <FormHelperText>
                By checking this box, you agree to our Terms of Service and Privacy Policy
              </FormHelperText>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Upload PDF Document
                <Tooltip title="Drop your PDF file here or click to select">
                  <Box component="span" sx={{ ml: 1 }}>
                    <FiHelpCircle />
                  </Box>
                </Tooltip>
              </Typography>
              <input
                type="file"
                accept="application/pdf"
                id="pdf-upload"
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
              <DropZone
                onDrop={handleFileDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById("pdf-upload").click()}
              >
                <Typography>
                  {formData.pdfFile ? formData.pdfFile.name : "Drag and drop a PDF file here or click to select"}
                </Typography>
              </DropZone>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <StyledButton
                variant="contained"
                color="primary"
                type="submit"
                disabled={!isFormValid()}
              >
                Share
              </StyledButton>
              <StyledButton
                variant="outlined"
                color="secondary"
                onClick={() => setOpenResetDialog(true)}
              >
                Reset
              </StyledButton>
            </Grid>
          </Grid>
        </CardContent>
        <Typography>
          After sharing your information you will be contacted by our team to set up your company dashboard.
        </Typography>
      </StyledCard>

      <Dialog open={openResetDialog} onClose={() => setOpenResetDialog(false)}>
        <DialogTitle>Confirm Reset</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to reset all form fields?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenResetDialog(false)}>Cancel</Button>
          <Button onClick={handleReset} color="error">
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </Box>



  );
};

export default Dashboard;