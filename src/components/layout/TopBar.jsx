import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/features/authSlice";

export default function TopBar({ toggleSidebar }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileAnchor, setProfileAnchor] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const handleProfileOpen = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.clear();
    navigate("/login", { replace: true });
  };
  const initials = `${user?.firstName?.[0] || ""}`;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: (theme) =>
          `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "64px",
          px: { xs: 2, sm: 3 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" fontWeight={700}>
            Dashboard Pro
          </Typography>
        </Box>

        <Box
          onClick={handleProfileOpen}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            p: 0.5,
            borderRadius: 2,
            "&:hover": { bgcolor: "action.hover" },
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "primary.main",
              fontWeight: 600,
            }}
          >
            {initials}
          </Avatar>
        </Box>

        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={handleProfileClose}
          PaperProps={{
            sx: {
              mt: 1,
              minWidth: 220,
              borderRadius: 2,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography fontWeight={600}>
              {user?.firstName} {user?.lastName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              @{user?.username}
            </Typography>
          </Box>

          <MenuItem onClick={() => navigate("/profile")}>My Profile</MenuItem>

          <MenuItem onClick={() => navigate("/settings")}>
            Account Settings
          </MenuItem>

          <MenuItem
            onClick={handleLogout}
            sx={{
              color: "error.main",
              borderTop: (theme) =>
                `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              mt: 0.5,
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
