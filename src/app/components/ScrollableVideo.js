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
      const dpr = window.devicePixelRatio || 1;

      // Su iOS Safari visualViewport restituisce il viewport visibile reale
      const width = window.visualViewport ? window.visualViewport.width : window.innerWidth;
      const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;

      // Setto dimensioni in pixel per canvas tenendo conto del devicePixelRatio (retina etc)
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      // Setto dimensioni CSS per adattarsi al viewport
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scala il contesto per supportare il devicePixelRatio e mantenere nitidezza
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();

    // Debounce semplice per resize, evita troppi setCanvasSize in rapida successione
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
      }, 100);
    };

    window.addEventListener("resize", onResize);
    // Anche visualViewport può cambiare dimensione, utile per mobile quando cambia l'area visibile
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", onResize);
    }

    // Creazione e configurazione del video
    const video = document.createElement("video");
    video.src = "/ocean_lite.mp4";
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true; // importantissimo per autoplay su iOS mobile
    videoRef.current = video;

    // Helper to safely play/pause
    const safePlay = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };
    const safePause = () => {
      if (!video.paused) {
        video.pause();
      }
    };

    safePlay();

    const updateFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mantieni aspect ratio del video e copri il canvas (object-fit: cover)
      const videoAspect = video.videoWidth / video.videoHeight;
      const canvasAspect = canvas.width / canvas.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > videoAspect) {
        // Canvas più largo rispetto al video
        drawWidth = canvas.width;
        drawHeight = canvas.width / videoAspect;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        // Canvas più alto rispetto al video
        drawHeight = canvas.height;
        drawWidth = canvas.height * videoAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);

      animationFrameRef.current = requestAnimationFrame(updateFrame);
    };

    video.onloadeddata = () => {
      updateFrame();
    };

    // Optionally, if you have scroll/visibility logic, use safePlay/safePause instead of direct play/pause

    return () => {
      window.removeEventListener("resize", onResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", onResize);
      }
      cancelAnimationFrame(animationFrameRef.current);
      safePause();
      video.src = "";
      video.load();
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default HeroVideo;
