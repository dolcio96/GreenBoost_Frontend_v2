"use client";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const HeroVideo = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Creazione e configurazione del video
    const video = document.createElement("video");
    video.src = "/river.mp4"; // Video per l'hero
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.play().catch(console.error); // Gestione errori autoplay
    videoRef.current = video;

    const updateFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      animationFrameRef.current = requestAnimationFrame(updateFrame);
    };

    video.onloadeddata = () => {
      updateFrame();
    };

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameRef.current);
      video.pause();
      video.src = "";
      video.load();
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "0vh",
      }}
    >
      {/* Video Hero */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default HeroVideo;
