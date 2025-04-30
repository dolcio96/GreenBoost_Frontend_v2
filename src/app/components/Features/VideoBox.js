"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

const VideoBox = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {visible && (
        <video
          src="/ocean.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",       // evita margini extra
            borderRadius: "16px",   // applicato direttamente al <video>
          }}
        />
      )}
    </Box>
  );
};

export default VideoBox;
