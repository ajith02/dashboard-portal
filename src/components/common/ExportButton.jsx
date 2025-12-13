import { Download } from "@mui/icons-material";
import { alpha, Button, CircularProgress, Tooltip } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../../store/features/toastSlice";
import { colors } from "../../utils/dashboardData";
import { exportChartAsPDF } from "../../utils/exportPDF";

const ExportIconButton = ({ chartId, tooltipTitle = "Export as PDF", sx = {} }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleExport = async () => {
    if (!chartId) {
      dispatch(showToast({ message: "Chart not found!", severity: "error" }));
      return;
    }

    setLoading(true);
    try {
      await exportChartAsPDF(chartId, `${chartId}.pdf`);
      dispatch(showToast({ message: "PDF downloaded successfully!", severity: "success" }));
    } catch (err) {
      console.error(err);
      dispatch(showToast({ message: "Failed to export PDF!", severity: "error" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tooltip title={tooltipTitle} arrow>
      <Button
        onClick={handleExport}
        startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <Download />}
        variant="contained"
        size="small"
        disabled={loading}
        sx={{
          textTransform: "none",
          borderRadius: "10px",
          backgroundColor: alpha(colors.primary, 0.15),
          color: colors.primary,
          fontWeight: 600,
          fontSize: "12px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: alpha(colors.primary, 0.25),
            boxShadow: `0 4px 10px ${alpha(colors.primary, 0.2)}`,
          },
          ...sx,
        }}
      >
        {loading ? "Downloading..." : "Export PDF"}
      </Button>
    </Tooltip>
  );
};

export default ExportIconButton;
