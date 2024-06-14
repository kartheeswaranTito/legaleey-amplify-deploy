// src/components/SideNav.tsx

"use client"; // Ensure this component is client-side

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  HomeOutlined,
  Description,
  DeleteOutlineOutlined,
  PlagiarismOutlined,
  Add,
} from "@mui/icons-material";

const drawerWidth = 240;

const SideNav: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // State for managing the menu open state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar>
        <Typography variant="h5" noWrap color="#1469FB">
          LEGALEEY
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {/* <Paper> */}
          <ListItem>
            <Paper
              elevation={3}
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
              }}
            >
              <Button
                aria-controls={open ? "menu-button" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  width: "120px",
                  height: "10px",
                  gap: "0px",
                  opacity: 1,
                  justifyContent: "center",
                  marginLeft: "0px",
                  color: "black", // Set text color to black
                }}
              >
                <Add />
                ADD NEW
              </Button>
            </Paper>
            <Menu
              id="menu-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right", // Align menu to the right of the button
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left", // Open from the right side towards left
              }}
            >
              <MenuItem onClick={handleClose}>Add New Documents</MenuItem>
              <MenuItem onClick={handleClose}>Create Folder</MenuItem>
            </Menu>
          </ListItem>
          {/* </Paper> */}
          <ListItem
            button
            onClick={() => handleNavigation("/home")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
              },
              backgroundColor: pathname === "/home" ? "#397EF3" : "transparent",
              borderRadius: "8px",
            }}
          >
            <ListItemIcon>
              <HomeOutlined
                sx={{
                  "&:hover": {
                    backgroundColor: "#397EF3",
                  },
                  backgroundColor:
                    pathname === "/home" ? "#397EF3" : "transparent",
                  // borderRadius: "8px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/my-documents")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
              },
              backgroundColor:
                pathname === "/my-documents" ? "#397EF3" : "transparent",
              borderRadius: "8px",
            }}
          >
            <ListItemIcon>
              <Description
                sx={{
                  "&:hover": {
                    backgroundColor: "#397EF3",
                  },
                  backgroundColor:
                    pathname === "/my-documents" ? "#397EF3" : "transparent",
                  // borderRadius: "8px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="My Documents" />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/trash")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
              },
              backgroundColor:
                pathname === "/trash" ? "#397EF3" : "transparent",
              borderRadius: "8px",
            }}
          >
            <ListItemIcon>
              <DeleteOutlineOutlined
                sx={{
                  "&:hover": {
                    backgroundColor: "#397EF3",
                  },
                  backgroundColor:
                    pathname === "/trash" ? "#397EF3" : "transparent",
                  // borderRadius: "8px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/search-history")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
              },
              backgroundColor:
                pathname === "/search-history" ? "#397EF3" : "transparent",
              borderRadius: "8px",
            }}
          >
            <ListItemIcon>
              <PlagiarismOutlined
                sx={{
                  "&:hover": {
                    backgroundColor: "#397EF3",
                  },
                  backgroundColor:
                    pathname === "/search-history" ? "#397EF3" : "transparent",
                  // borderRadius: "8px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Search History" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
export default SideNav;
