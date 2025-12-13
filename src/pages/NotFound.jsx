import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        px: 2,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
          mb: 1,
        }}
      >
        404
      </Typography>

      <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
        Oops! Page Not Found
      </Typography>

      <Typography
        variant="body1"
        sx={{ maxWidth: 400, mb: 4, color: theme.palette.text.secondary }}
      >
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/dashboard")}
        sx={{ borderRadius: "8px", px: 3, py: 1.2, fontWeight: "bold" }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
