import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import DashboardIcon from "@mui/icons-material/Dashboard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import FlagIcon from "@mui/icons-material/Flag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          { text: "Dashboard", icon: <DashboardIcon />, link: "/" },
          { text: "Exercises", icon: <FitnessCenterIcon />, link: "/exercises" },
          { text: "Workout Plan", icon: <FeaturedPlayListIcon />, link: "/workout_plan" },
          { text: "Goals", icon: <FlagIcon />, link: "/goals" },
          { text: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link} selected={location.pathname === item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
      <Divider />
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            marginLeft: { sm: mobileOpen ? 0 : `${drawerWidth}px` }, // Adjusted margin
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                marginLeft: mobileOpen ? 0 : `-${drawerWidth}px`, // Adjusted margin
                transition: 'margin-left 300ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginLeft: { sm: mobileOpen ? 0 : `${drawerWidth}px` }, // Adjusted margin
          }}
        >
          <Toolbar />
        </Box>
      </Box>
    );
  }
  
  ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
  };
  
  export default ResponsiveDrawer;
