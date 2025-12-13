import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6C5DD3", 
      light: "#9A8CFF",
      dark: "#4B3DB0", 
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF758F",
      light: "#FFA3B1", 
      dark: "#D05C73", 
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F7F7FA", 
      paper: "#FFFFFF", 
    },
    text: {
      primary: "#1E1E2F", 
      secondary: "#6B6B7A", 
      disabled: "#B0B0C3", 
    },
    success: {
      main: "#4ADE80", 
    },
    info: {
      main: "#3B82F6", 
    },
    warning: {
      main: "#FACC15",
    },
    error: {
      main: "#F87272", 
    },
  },
  typography: {
    fontFamily: "Poppins,  sans-serif", 
    h1: { fontSize: "2.25rem", fontWeight: 700, color: "#1E1E2F" },
    h2: { fontSize: "1.75rem", fontWeight: 600, color: "#1E1E2F" },
    h3: { fontSize: "1.25rem", fontWeight: 600, color: "#1E1E2F" },
    body1: { fontSize: "1rem", lineHeight: 1.6, color: "#1E1E2F" },
    body2: { fontSize: "0.875rem", color: "#6B6B7A" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "10px 22px",
          boxShadow: "0 4px 15px rgba(108, 93, 211, 0.2)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(108, 93, 211, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1E1E2F",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF",
          boxShadow: "4px 0 20px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
