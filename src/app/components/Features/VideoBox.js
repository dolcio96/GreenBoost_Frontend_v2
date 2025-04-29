"use client";
import React from "react";
import { Box } from "@mui/material";

const VideoBox = () => {
  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <video width="100%" height="auto" controls>
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoBox;
