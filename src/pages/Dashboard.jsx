import { Assessment, PieChart, Schedule, Timeline } from "@mui/icons-material";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChartCard from "../components/dashboard/ChartCard";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import KPICard from "../components/dashboard/KPICard";
import PerformanceMetrics from "../components/dashboard/PerformanceMetrics";
import SystemStats from "../components/dashboard/SystemStats";

import DashboardSkeleton from "../components/dashboard/DashBoardSkeleton";
import { fetchDashboardData } from "../store/features/dashboardSlice";
import { colors } from "../utils/dashboardData";

export default function Dashboard() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [timeRange, setTimeRange] = useState("monthly");

  const { data, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) return <DashboardSkeleton />;

  if (error)
    return <Box sx={{ p: 4, textAlign: "center", color: "red" }}>{error}</Box>;

  const kpis = [
    { title: "Users", value: data?.users?.length || 0, icon: "user" },
    { title: "Products", value: data?.products?.length || 0, icon: "box" },
    { title: "Posts", value: data?.posts?.length || 0, icon: "post" },
    {
      title: "Todos Completed",
      value: data?.todos?.filter((t) => t.completed).length || 0,
      icon: "check",
    },
  ];

  const revenueData = (data?.products || []).slice(0, 12).map((p, i) => ({
    month: `M${i + 1}`,
    revenue: p.price * (p.stock || 1),
    target: p.price * (p.stock || 1) * 1.2,
  }));

  const salesData = [...(data?.products || [])]
    .sort((a, b) => b.price - a.price)
    .slice(0, 5)
    .map((p) => ({
      category: p.title.length > 15 ? p.title.slice(0, 12) + "..." : p.title,
      value: p.price * (p.stock || 1),
    }));

  const activityData =
    data?.todos
      ?.reduce((acc, todo) => {
        const user = acc.find((u) => u.userId === todo.userId);
        if (user) {
          user.total += 1;
          if (todo.completed) user.completed += 1;
        } else {
          acc.push({
            userId: todo.userId,
            total: 1,
            completed: todo.completed ? 1 : 0,
          });
        }
        return acc;
      }, [])
      .map((u) => ({
        day: `User ${u.userId}`,
        users: u.completed,
        new: u.total,
      })) || [];

  const performanceData = [
    {
      label: "Average Posts/User",
      value: data?.users?.length
        ? Math.round(data?.posts?.length / data?.users?.length)
        : 0,
    },
    {
      label: "Average Todos/User",
      value: data?.users?.length
        ? Math.round(data?.todos?.length / data?.users?.length)
        : 0,
    },
    {
      label: "Todos Completion %",
      value: data?.todos?.length
        ? Math.round(
            (data?.todos.filter((t) => t.completed).length /
              data?.todos.length) *
              100
          )
        : 0,
    },
  ];

  const systemStats = [
    { label: "CPU Usage", value: `${Math.floor(Math.random() * 80)}%` },
    { label: "Memory", value: `${Math.floor(Math.random() * 80)}%` },
    { label: "Disk", value: `${Math.floor(Math.random() * 90)}%` },
  ];

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        bgcolor: colors.background,
        minHeight: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <DashboardHeader
        title="Analytics Dashboard"
        subtitle="Live data coming from API"
        timeRange={timeRange}
        onTimeRangeChange={setTimeRange}
        isMobile={isMobile}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          mb: 4,
          "& > *": {
            flex: isMobile ? "1 1 100%" : "1 1 calc(25% - 18px)",
            minWidth: isMobile ? "100%" : "250px",
          },
        }}
      >
        {kpis.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          gap: 3,
          mb: 3,
        }}
      >
        <ChartCard
          chartId="revenue-analytics-chart"
          title={
            <>
              <Timeline sx={{ color: colors.primary }} />
              Revenue Analytics
            </>
          }
          subtitle="Track revenue performance against targets"
          chartType="line"
          data={revenueData}
          dataKeyX="month"
          dataKeyY="revenue"
          dataKeyY2="target"
          color={colors.primary}
          color2={colors.textSecondary}
          height={isMobile ? 250 : 300}
          direction={isMobile ? "column" : "row"}
          gap={isMobile ? 2 : 0}
          flexRatio={isTablet ? "1 1 100%" : "2 1 0%"}
        />

        <ChartCard
          chartId="revenue-breakdown"
          title={
            <>
              <PieChart sx={{ color: colors.purple }} />
              Revenue Breakdown
            </>
          }
          subtitle="Distribution across segments"
          chartType="pie"
          data={salesData}
          dataKey="value"
          nameKey="category"
          height={isMobile ? 250 : 300}
          flexRatio={isTablet ? "1 1 100%" : "1 1 0%"}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          gap: 3,
        }}
      >
        <ChartCard
          chartId="user-activity"
          title={
            <>
              <Schedule sx={{ color: colors.success }} />
              User Engagement
            </>
          }
          subtitle="Daily user activity trends"
          chartType="bar"
          data={activityData}
          dataKeyX="day"
          dataKeyY="users"
          dataKeyY2="new"
          color={colors.success}
          color2={colors.purpleLight}
          height={250}
          direction={isMobile ? "column" : "row"}
          gap={isMobile ? 2 : 0}
          flexRatio={isTablet ? "1 1 100%" : "1 1 0%"}
        />

        <ChartCard
          chartId="performance-metrics"
          flexRatio={isTablet ? "1 1 100%" : "1 1 0%"}
          title={
            <>
              <Assessment sx={{ color: colors.warning }} />
              Performance Metrics
            </>
          }
          subtitle="Key performance indicators and trends"
        >
          <PerformanceMetrics data={performanceData} />
        </ChartCard>
      </Box>

      <SystemStats
        title="System Overview"
        subtitle="Real-time metrics and insights"
        stats={systemStats}
        isMobile={isMobile}
      />
    </Box>
  );
}
