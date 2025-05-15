import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from "@mui/material";

const ContactDialog = ({ open, onClose, theme }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        //backgroundColor: theme.palette.background.light, // Imposta il colore di sfondo

        // Aggiungi il bordo attorno all'intero Dialog
        borderRadius: '8px',  // Imposta il bordo arrotondato
        border: `2px solid ${theme.palette.secondary.main}`, // Imposta il bordo intorno a tutto il dialogo

        // Stilizzazione del contenuto interno
        '& .MuiDialogTitle-root': {
          backgroundColor: theme.palette.background.dark, // Imposta il background per l'header del dialogo
          color: theme.palette.text.primary, // Imposta il colore del testo del titolo
        },
        '& .MuiDialogContent-root': {
          backgroundColor: theme.palette.background.dark, // Imposta il background per il contenuto del dialogo
          color: theme.palette.text.primary, // Imposta il colore del testo
        },
        '& .MuiDialogActions-root': {
          backgroundColor: theme.palette.background.dark, // Imposta il background per la sezione delle azioni (pulsante)
        },
      }}
    >
      <DialogTitle>Contact Information</DialogTitle> {/* Imposta il titolo del dialogo */}
      <DialogContent> {/* Imposta il contenuto del dialogo */}
        <Typography variant="body1">
          Email: <a href="info@greenboost.it" style={{ color: theme.palette.text.primary }}>info@greenboost.it</a>
        </Typography>
      
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: theme.palette.secondary.main }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
