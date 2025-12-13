import { People, TrendingFlat, TrendingUp } from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from "@mui/material";
import { colors } from "../../utils/dashboardData";

const iconMap = {
  People,
  TrendingUp,
  TrendingFlat,
  Speed: ({ sx }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={sx}
    >
      <path d="M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44z" />
      <path d="M10.59 15.41a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z" />
    </svg>
  ),
};

const SystemStats = ({ title, subtitle, stats, isMobile }) => {
  return (
    <Card
      sx={{
        mt: 3,
        borderRadius: 3,
        boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
        border: `1px solid ${alpha(colors.primary, 0.1)}`,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: colors.textPrimary }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color={colors.textSecondary}>
              {subtitle}
            </Typography>
          )}
        </Box>

        <Divider sx={{ mb: 3, borderColor: alpha(colors.primary, 0.1) }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            "& > *": {
              flex: "1 1 calc(25% - 24px)",
              minWidth: isMobile ? "100%" : "200px",
            },
          }}
        >
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || iconMap.People;
            return (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: alpha(colors.primary, 0.1),
                    color: colors.primary,
                    mb: 2,
                    boxShadow: `0 4px 12px ${alpha(colors.primary, 0.1)}`,
                  }}
                >
                  <IconComponent sx={{ fontSize: 16 }} />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 0.5, color: colors.textPrimary }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  color={colors.textSecondary}
                  sx={{ mb: 1 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SystemStats;
