import React from "react";
import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const PlanScenario = ({ openDialog, scenarioName, setScenarioName, handleSaveScenario, handleCloseDialog }) => {
  return (
    <Card sx={{ backgroundColor: "#1f2937", p: 3, border: "1px solid #374151", borderRadius: 2, height: "100%" }}>
      <Typography variant="h6" fontWeight="bold" color="white" mb={2}>
        Plan a Scenario
      </Typography>
      <Button variant="contained" color="primary" onClick={handleSaveScenario}>
        Save Scenario
      </Button>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Save Scenario</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="gray.400">Enter Scenario Name</Typography>
          <input
            type="text"
            value={scenarioName}
            onChange={(e) => setScenarioName(e.target.value)}
            placeholder="Scenario Name"
            style={{ width: "100%", padding: "8px", marginTop: "8px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">Cancel</Button>
          <Button onClick={handleCloseDialog} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default PlanScenario;
