"use client";
import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Box, TextField, IconButton, Paper, Typography, List, ListItem, ListItemText, CircularProgress, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function AssistantChat() {
      const theme = useTheme();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]); // Conversation memory
  const threadIdRef = useRef(null); // Store thread ID for the session

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let threadId = threadIdRef.current;
    let newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    try {
      const res = await fetch("/api/assistant-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, threadId }),
      });
      const data = await res.json();
      if (data.error) {
        setMessages([...newMessages, { role: "assistant", content: "Error: " + data.error }]);
      } else {
        threadIdRef.current = data.threadId;
        setMessages(data.messages);
      }
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: "Error: " + err.message }]);
    }
    setInput("");
    setLoading(false);
  }

  return (
    <Paper elevation={3} sx={{ width: "100%", maxWidth: 900, margin: "auto", p: 4, mt: 6, bgcolor: "rgba(11,23,28,0.60)", borderRadius: 3, boxShadow: "0 2px 16px rgba(0,0,0,0.10)" }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: "center", color:  theme.palette.text.primary, fontWeight: "bold" }}>D4D Assistant</Typography>
      <Box sx={{
        bgcolor: "transparent",
        p: 3,
        borderRadius: 2,
        minHeight: 250,
        maxHeight: 350,
        overflowY: "auto",
        mb: 3,
        boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
        // Custom scrollbar styles
        '&::-webkit-scrollbar': {
          width: 8,
          background: 'rgba(0,0,0,0.03)',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(135deg, rgba(11,23,28,0.18) 0%, rgba(25,118,210,0.22) 100%)',
          borderRadius: 6,
          border: '2px solid rgba(255,255,255,0.15)',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'linear-gradient(135deg, rgba(25,118,210,0.28) 0%, rgba(11,23,28,0.22) 100%)',
        },
        scrollbarColor: 'rgba(25,118,210,0.22) rgba(0,0,0,0.03)',
        scrollbarWidth: 'thin',
      }}>
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              bgcolor: msg.role === "user" ? "#d1e7ff" : "#e9ecef",
              color: "#222",
              borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              p: 2.5,
              maxWidth: "80%",
              mb: 1.5,
              boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
              fontSize: 18,
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, color: "#888" }}>
              {msg.role === "user" ? "You" : "Assistant"}
            </Typography>
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </Box>
        ))}
      </Box>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12 }}>
        <TextField
          fullWidth
          size="medium"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          variant="outlined"
          disabled={loading}
          sx={{ borderRadius: 2, bgcolor: "rgba(11,23,28,0.60)" , boxShadow: "0 1px 6px rgba(0,0,0,0.10)", fontSize: 18, p: 1.5 }}
        />
        <IconButton
          color="primary"
          onClick={handleSubmit}
          sx={{ borderRadius: 2, bgcolor: "#1976d2", color: "#fff", p: 2, "&:hover": { bgcolor: "#155a8a" }, fontSize: 28 }}
          disabled={loading || !input.trim()}
        >
          {loading ? <CircularProgress size={28} color="inherit" /> : <SendIcon sx={{ fontSize: 28 }} />}
        </IconButton>
      </form>
      <Typography variant="caption" sx={{ color: "red", mt: 3, textAlign: "center", fontSize: 15 }}>
      
      </Typography>
    </Paper>
  );
}
