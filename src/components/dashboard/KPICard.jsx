import {
  AttachMoney,
  People,
  ShoppingCart,
  ShowChart,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Typography, alpha } from "@mui/material";
import { colors } from "../../utils/dashboardData";

const iconMap = {
  AttachMoney,
  People,
  ShoppingCart,
  ShowChart,
};

const KPICard = ({ title, value, change, trend = "up", icon = "People", description }) => {
  const IconComponent = iconMap[icon] || People;
  const cardColor = trend === "up" ? colors.success : colors.error;

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
        border: `1px solid ${alpha(colors.primary, 0.1)}`,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 40px rgba(108, 93, 211, 0.12)",
        },
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${alpha(colors.primary, 0.2)}, ${alpha(colors.primary, 0.1)})`,
              color: colors.primary,
              display: "flex",
              boxShadow: `0 4px 12px ${alpha(colors.primary, 0.15)}`,
            }}
          >
            <IconComponent fontSize="small" />
          </Box>

          <Chip
            label={change}
            size="small"
            icon={trend === "up" ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
            sx={{
              height: 28,
              borderRadius: "10px",
              bgcolor: alpha(cardColor, 0.1),
              color: cardColor,
              fontWeight: 600,
              border: "none",
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            color: colors.textPrimary,
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          {value}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            mb: 0.5,
            color: colors.textPrimary,
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography variant="body2" color={colors.textSecondary}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default KPICard;
