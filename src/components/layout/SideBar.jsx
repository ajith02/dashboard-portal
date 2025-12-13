import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  alpha,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../store/features/authSlice";

export default function Sidebar({ open, setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Analytics", icon: <AnalyticsIcon />, path: "/analytics" },
    { text: "Reports", icon: <AssessmentIcon />, path: "/reports" },
    { text: "Users", icon: <PeopleIcon />, path: "/users" },
    { text: "Charts", icon: <BarChartIcon />, path: "/charts" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={() => setOpen(false)}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          backgroundColor: "background.paper",
          borderRight: (theme) =>
            `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          boxShadow: "0 0 20px rgba(0,0,0,0.05)",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          Dashboard Pro
        </Typography>
        <IconButton
          onClick={() => setOpen(false)}
          size="medium"
          sx={{
            color: "text.secondary",
            bgcolor: (theme) => alpha(theme.palette.action.hover, 0.1),
            borderRadius: "50%",
            p: 0.5,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.action.hover, 0.3),
              transform: "scale(1.1)",
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={() => setOpen(false)}
            sx={{
              mb: 1,
              borderRadius: 2,
              color: isActive(item.path) ? "primary.main" : "text.secondary",
              backgroundColor: isActive(item.path)
                ? (theme) => alpha(theme.palette.primary.main, 0.1)
                : "transparent",
              borderLeft: isActive(item.path)
                ? `3px solid`
                : "3px solid transparent",
              borderColor: isActive(item.path) ? "primary.main" : "transparent",
              "&:hover": {
                backgroundColor: (theme) =>
                  alpha(theme.palette.action.hover, 0.3),
                color: "text.primary",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: isActive(item.path) ? "primary.main" : "inherit",
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: isActive(item.path) ? 600 : 500,
                fontSize: "0.95rem",
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ p: 3 }}>
        <Divider sx={{ mb: 2 }} />
        <ListItem
          button
          component={Link}
          to="/login"
          onClick={() => {
            setOpen(false);
          }}
          sx={{
            borderRadius: 2,
            color: "error.main",
            "&:hover": {
              backgroundColor: (theme) => alpha(theme.palette.error.main, 0.1),
            },
          }}
        >
          <ListItemIcon sx={{ color: "error.main", minWidth: 40 }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            onClick={handleLogout}
            primary="Logout"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          />
        </ListItem>
      </Box>
    </Drawer>
  );
}
