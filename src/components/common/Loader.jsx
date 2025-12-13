import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = ({ text = "Loading..." }) => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <CircularProgress size={40} />
      <Typography variant="body1" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
};

export default Loader;
