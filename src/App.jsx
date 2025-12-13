import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import GlobalToast from "./components/common/GlobalToast";
import MainRoute from "./routes/MainRoute";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <MainRoute />
        <GlobalToast />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
