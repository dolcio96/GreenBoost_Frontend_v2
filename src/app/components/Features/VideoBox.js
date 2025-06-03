"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import Slider from "@mui/material/Slider";

const VideoBox = () => {
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const theme = useTheme();

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [visible]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleMute = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.muted = newMuted;
    }
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      if (containerRef.current && containerRef.current.requestFullscreen) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleSeek = (event, newValue) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: theme.palette.background.dark,
      }}
    >
      {visible && (
        <video
          ref={videoRef}
          src="/demoD4D.mp4"
          autoPlay
          loop
          muted={muted}
          playsInline
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: "16/9",
            objectFit: isFullscreen ? "cover" : "contain",
            display: "block",
            borderRadius: "16px",
            pointerEvents: "none",
            backgroundColor: "transparent",
            maxWidth: "100vw",
            maxHeight: isFullscreen ? "100vh" : "60vw",
          }}
          webkit-playsinline="true"
          x5-playsinline="true"
          x-webkit-airplay="allow"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
        />
      )}

      {visible && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 1,
            zIndex: 2,
          }}
        >
          <IconButton
            onClick={toggleMute}
            sx={{
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>

          <IconButton
            onClick={toggleFullscreen}
            sx={{
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </Box>
      )}

      {/* Seek bar always visible when video is visible */}
      {visible && (
        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            left: 24,
            right: 24,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Slider
            min={0}
            max={duration}
            value={currentTime}
            step={0.1}
            onChange={handleSeek}
            sx={{
              color: "white",
              flex: 1,
              "& .MuiSlider-thumb": { backgroundColor: "white" },
              "& .MuiSlider-rail": { backgroundColor: "rgba(255,255,255,0.3)" },
              "& .MuiSlider-track": { backgroundColor: "white" },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default VideoBox;
