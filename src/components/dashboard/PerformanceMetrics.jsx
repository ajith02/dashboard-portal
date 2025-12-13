import { alpha, Box, LinearProgress, Stack, Typography } from "@mui/material";
import { colors } from "../../utils/dashboardData";

const PerformanceMetrics = ({ data }) => {
  return (
    <>
      <Stack spacing={3}>
        {data.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography
                variant="body2"
                fontWeight={500}
                color={colors.textPrimary}
              >
                {item.metric}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={700}
                color={colors.textPrimary}
              >
                {item.value}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.value}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: alpha(colors.primary, 0.1),
                "& .MuiLinearProgress-bar": {
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.purpleLight})`,
                  borderRadius: 4,
                },
              }}
            />
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default PerformanceMetrics;
