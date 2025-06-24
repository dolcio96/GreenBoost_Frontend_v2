import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const getCalendlyDarkUrl = (baseUrl, theme) => {
    // Use MUI theme colors or fallback to dark values
    const primary = theme.palette.secondary.main.replace('#', '');
    const text = theme.palette.text.primary.replace('#', '');
    const background = theme.palette.background.default.replace('#', '');
    return `${baseUrl}?primary_color=${primary}&text_color=${text}&background_color=${background}`;
};

const calendlyBaseUrl = "https://calendly.com/enrico-martini-greenboost";

const CalendarBookingSection = () => {
    const theme = useTheme();
    const calendlyUrl = getCalendlyDarkUrl(calendlyBaseUrl, theme);
    return (
        <Paper sx={{ backgroundColor: theme.palette.background.light, padding: 4, boxShadow: 3, marginBottom: 4, mt: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
                Book a Demo With our Team
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Box sx={{ width: { xs: '100%', md: 600 }, height: 700, boxShadow: 2, borderRadius: 2, overflow: 'hidden' }}>
                    <iframe
                        src={calendlyUrl}
                        width="100%"
                        height="100%"
                        style={{ minHeight: 700, border: 'none' }}
                        title="Calendly Booking"
                        allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
                    />
                </Box>
            </Box>
        </Paper>
    );
};

export default CalendarBookingSection;
