import { Box, Card, CardContent, Typography, alpha } from "@mui/material";
import { colors } from "../../utils/dashboardData";
import ExportIconButton from "../common/ExportButton";
import ReusableChart from "../common/ReusableChart";

const ChartCard = ({
  title,
  subtitle,
  children,
  chartType = "line",
  data,
  dataKeyX,
  dataKeyY,
  dataKeyY2,
  color = colors.primary,
  color2,
  showGrid = true,
  showTooltip = true,
  showLegend = true,
  showLabel = false,
  height = 300,
  chartId,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 8px 32px rgba(108, 93, 211, 0.08)",
        border: `1px solid ${alpha(colors.primary, 0.1)}`,
        height: "100%",
        width: "100%",
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
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            {title && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: "wrap",
                  mb: subtitle ? 0.5 : 0,
                }}
              >
                {typeof title === "string" ? (
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: colors.textPrimary,
                      lineHeight: 1.2,
                    }}
                  >
                    {title}
                  </Typography>
                ) : (
                  title
                )}
              </Box>
            )}

            {subtitle && (
              <Typography variant="body2" color={colors.textSecondary}>
                {subtitle}
              </Typography>
            )}
          </Box>

          <Box sx={{ flexShrink: 0 }}>
            <ExportIconButton chartId={chartId} />
          </Box>
        </Box>

        {data ? (
          <Box id={chartId} sx={{ height }}>
            <ReusableChart
              data={data}
              dataKeyX={dataKeyX}
              dataKeyY={dataKeyY}
              dataKeyY2={dataKeyY2}
              type={chartType}
              color={color}
              color2={color2}
              showGrid={showGrid}
              showTooltip={showTooltip}
              showLegend={showLegend}
              showLabel={showLabel}
              chartId={chartId}
            />
          </Box>
        ) : (
          <Box id={chartId} sx={{ height }}>
            {children}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
