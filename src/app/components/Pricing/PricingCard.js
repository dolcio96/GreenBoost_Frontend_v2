"use client";
import React from "react";
import { Card, CardContent, Typography, Box, Button, Chip, useTheme } from "@mui/material";

const PricingCard = ({ plan }) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                bgcolor: theme.palette.background.dark,
                borderRadius: "10px",
                border: plan.popular ? 2 : 1,
                borderColor: plan.popular ? theme.palette.secondary.main : theme.palette.secondary.light,
                position: "relative",
                height: "50vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {plan.popular && (
                <Chip
                    label="Most Popular"
                    color="primary"
                    sx={{
                        position: "absolute",
                        top: -11,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.text.tertiary,
                        fontWeight: "bold",
                        fontSize: "0.75rem", // opzionale: dimensione testo
                        "& .MuiChip-label": {
                            px: 2, // padding orizzontale per etichetta
                        },
                    }}
                />
            )}
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" fontWeight="bold" color={theme.palette.text.secondary}>
                    {plan.name}
                </Typography>
                <Typography variant="h4" fontWeight="bold" mt={2} color={theme.palette.text.primary}>
                    {plan.icon}
                </Typography>
                <Typography variant="h5" fontWeight="bold" mt={2} color={theme.palette.text.primary}>
                    {plan.price}
                </Typography>
               {/*<Typography variant="body2" color={theme.palette.text.secondary}>
                    {plan.duration}
                </Typography>*/ }
                <Box mt={3} flexGrow={1}>
                    {plan.features.map((feature, index) => (
                        <Typography
                            key={index}
                            variant="body2" // Cambiato da "body3" a "body2" per coerenza, se necessario
                            color={theme.palette.text.secondary}
                            gutterBottom
                            textAlign="left"
                            sx={{
                                wordWrap: "break-word", // Permette la rottura del testo
                                whiteSpace: "normal", // Assicura che il testo vada a capo
                                fontSize: "1rem",
                            }}
                        >
                            ✓ {feature}
                        </Typography>
                    ))}
                </Box>
            </CardContent>
            <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
                <Button fullWidth variant={plan.buttonVariant} href="/Registration"
                    sx={{
                        borderRadius: "10px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        bgcolor: plan.buttonVariant === "contained" ? theme.palette.secondary.main : "transparent",
                        color: plan.buttonVariant === "contained" ? theme.palette.text.tertiary : theme.palette.secondary.main,
                        borderColor: plan.buttonVariant === "outlined" ? theme.palette.secondary.main : "none",
                        "&:hover": {
                            bgcolor: plan.buttonVariant === "contained" ? theme.palette.primary.dark : theme.palette.secondary.main,
                            color: theme.palette.text.primary,
                        },
                    }}
                >
                    {plan.buttonText}
                </Button>
            </Box>
        </Card>
    );
};

export default PricingCard;
