import { CalendarToday, Circle } from "@mui/icons-material";
import { Box, Chip, Stack, Typography, alpha } from "@mui/material";
import { colors } from "../../utils/dashboardData";

const DashboardHeader = ({ title, subtitle, isMobile, showDate = true }) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Box sx={{ mb: { xs: 3, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={{ xs: 1.5, md: 0 }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: colors.textPrimary,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.purpleLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
              lineHeight: 1.2,
              wordBreak: "break-word",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
            }}
          >
            {title}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={{ xs: 0.5, sm: 2 }}
            sx={{ flexWrap: "wrap", gap: { xs: 1, sm: 1.5 } }}
          >
            {subtitle && (
              <Typography
                variant="body2"
                color={colors.textSecondary}
                sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
              >
                {subtitle}
              </Typography>
            )}

            {showDate && (
              <Chip
                icon={<CalendarToday sx={{ fontSize: 14 }} />}
                label={currentDate}
                size="small"
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  border: `1px solid ${alpha(colors.primary, 0.2)}`,
                  color: colors.textSecondary,
                  fontSize: { xs: "0.65rem", sm: "0.75rem" },
                  height: { xs: 24, sm: 26 },
                  fontWeight: 500,
                  bgcolor: alpha(colors.primary, 0.03),
                  "& .MuiChip-icon": {
                    marginLeft: "6px",
                    color: colors.primary,
                  },
                }}
              />
            )}
          </Stack>
        </Box>

        <Box sx={{ mt: { xs: 1, md: 0 } }}>
          <Chip
            icon={<Circle sx={{ fontSize: 8 }} />}
            label="Live"
            size="small"
            sx={{
              borderRadius: "16px",
              fontWeight: 600,
              fontSize: { xs: "0.65rem", sm: "0.75rem" },
              height: { xs: 24, sm: 28 },
              bgcolor: alpha(colors.success, 0.1),
              color: colors.success,
              border: `1px solid ${alpha(colors.success, 0.3)}`,
              "& .MuiChip-icon": {
                marginLeft: "8px",
                marginRight: "4px",
                animation: "pulse 1.5s infinite",
                "@keyframes pulse": {
                  "0%": { opacity: 1 },
                  "50%": { opacity: 0.5 },
                  "100%": { opacity: 1 },
                },
              },
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardHeader;
