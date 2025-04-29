"use client";

import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Box, Typography, Grid, Card, CardContent, IconButton, Divider } from "@mui/material";

const New = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const analyticsChartRef = useRef(null);
  const projectsChartRef = useRef(null);

  const notifications = [
    { id: 1, message: "New project invitation from Sarah Wilson", time: "10 min ago" },
    { id: 2, message: "Task deadline reminder: UI Design Review", time: "1 hour ago" },
    { id: 3, message: "Meeting scheduled with Development Team", time: "2 hours ago" },
  ];

  const activityData = [
    { title: "Total Projects", value: "32", trend: "+12%", icon: "folder" },
    { title: "Active Tasks", value: "48", trend: "+5%", icon: "list-check" },
    { title: "Team Members", value: "16", trend: "+3", icon: "users" },
    { title: "Completed Tasks", value: "284", trend: "+24%", icon: "check-double" },
  ];

  const recentProjects = [
    { name: "E-commerce Platform Redesign", progress: 75, team: ["AW", "BH", "CL"] },
    { name: "Mobile Banking App Development", progress: 45, team: ["DK", "EM"] },
    { name: "Healthcare Dashboard", progress: 90, team: ["FP", "GR", "HS"] },
    { name: "AI-Powered Analytics Tool", progress: 30, team: ["IT", "JU"] },
  ];

  useEffect(() => {
    if (analyticsChartRef.current) {
      const chart = echarts.init(analyticsChartRef.current);
      chart.setOption({
        animation: false,
        tooltip: { trigger: "axis" },
        grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
        xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
        yAxis: { type: "value" },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
            color: "#037932",
          },
        ],
      });
    }

    if (projectsChartRef.current) {
      const chart = echarts.init(projectsChartRef.current);
      chart.setOption({
        animation: false,
        tooltip: { trigger: "item" },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            data: [
              { value: 35, name: "In Progress" },
              { value: 45, name: "Completed" },
              { value: 20, name: "Pending" },
              { value: 40, name: "Pippo" },
            ],
            color: ["#037932", "#34d058", "#94d3a2","#91a1a2"],
          },
        ],
      });
    }
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#1F2937" }}>
      <Box sx={{ pt: 10, px: 3, pb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", color: "#F9FAFB" }}>
          Welcome back, Alexander!
        </Typography>
        <Typography variant="body1" sx={{ color: "#D1D5DB", mt: 2 }}>
          Tuesday, March 18, 2025
        </Typography>
      </Box>
    <Box mx={4}>
      <Grid container  spacing={3} sx={{ mb: 8 }}>
        {activityData.map((item, index) => (
          <Grid item  xs={12} sm={6} md={3} key={index}> 
            <Card
              sx={{
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "#111827",
                borderRadius: 3, // Aggiunta la proprietà per i bordi arrotondati
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" sx={{ color: "#D1D5DB" }}>
                  {item.title}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#F9FAFB", mt: 1 }}>
                  {item.value}
                </Typography>
                <Typography variant="body2" sx={{ color: "#10B981", mt: 1 }}>
                  {item.trend}
                </Typography>
              </CardContent>
              <Divider sx={{ borderColor: "#D1D5DB" }} />
              <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                <IconButton sx={{ backgroundColor: "#D1FAE5", color: "#037932", width: 36, height: 36 }}>
                  <i className={`fa-solid fa-${item.icon}`} />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mb: 8 }}>
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              boxShadow: 3,
              backgroundColor: "#111827",
              borderRadius: 3, // Aggiunta la proprietà per i bordi arrotondati
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#F9FAFB", mb: 2 }}>
                Weekly Activity
              </Typography>
              <div ref={analyticsChartRef} style={{ height: "300px" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              boxShadow: 3,
              backgroundColor: "#111827",
              borderRadius: 3, // Aggiunta la proprietà per i bordi arrotondati
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "", color: "#F9FAFB", mb: 2 }}>
                Project Status
              </Typography>
              <div ref={projectsChartRef} style={{ height: "300px" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      </Box>
    </Box>
  );
};

export default New;
