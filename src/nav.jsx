import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar } from "@mui/material";
import logo from "./assets/logo-bmw-com-gray.svg";

export default function ResponsiveNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Responsive breakpoints
  const isTabletOrMobile = useMediaQuery("(max-width:960px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    "Home",
    "Circular World",
    "Digital Journey",
    "Electric Future",
    "Freude",
    "Models",
  ];

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/i-drive/id-00-teaser-hd.mp4
          "
        />
        Your browser does not support HTML5 video.
      </video>
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        {/* Brand Logo / Title */}
        <Avatar src={logo} sx={{width: 56, height: 56}}/>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sheer Driving Pleasure
        </Typography>

        {/* Tablet and Mobile View: Toggle Button */}
        {isTabletOrMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          // Desktop View: Inline Menu Items
          menuItems.map((item) => (
            <Typography
              key={item}
              variant="body1"
              sx={{ marginLeft: 2, cursor: "pointer" }}
            >
              {item}
            </Typography>
          ))
        )}

        {/* Drawer for Tablet and Mobile View */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList()}
        </Drawer>
      </Toolbar>
    </AppBar>
    </div>
  );
}
