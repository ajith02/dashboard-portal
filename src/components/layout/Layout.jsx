import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar open={open} setOpen={setOpen} />

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar toggleSidebar={toggleSidebar} />
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: { xs: 2, md: 3 },
            mt: { xs: "64px", md: "64px" },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
