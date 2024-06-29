
"use client"; 

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
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", backgroundColor: "#F7F9FC" },
      }}
    >
      <Toolbar
        sx={{
          borderRadius: "0 20px 0 0",
          backgroundColor: "#F7F9FC",
        }}
      >
        <Typography variant="h5" noWrap color="#1469FB">
          LEGALEEY
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {/* <Paper> */}
          <ListItem sx={{mb:2}}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={handleClick}
              startIcon={<Add />}
              sx={{
                width: "auto", 
                height: "50px", 
                gap: "8px", 
                justifyContent: "center",
                marginLeft: "0px",
                backgroundColor: "#FFFFFF",
                color: "black",
                boxShadow: `
          0px 3px 1px -2px #00000033,
          0px 2px 2px 0px #00000024,
          0px 1px 5px 0px #0000001F
        `,
                "&:hover": {
                  backgroundColor: "#F0F0F0", // Slightly darker background on hover
                  boxShadow: `
            0px 4px 2px -2px #00000033,
            0px 3px 3px 0px #00000024,
            0px 2px 6px 0px #0000001F
          `,
                },
              }}
            >
              Add New
            </Button>
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
                ".MuiListItemText-root, .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              backgroundColor: pathname === "/home" ? "#397EF3" : "transparent",
              borderRadius: "6px",
              marginBottom: "3px",
              width: "220px",
              height: "50px",
              justifyContent: "space-between",
              marginLeft:"10px",  
            }}
          >
            <ListItemIcon
              sx={{
                color: pathname === "/home" ? "white" : "inherit",
              }}
            >
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{
                color: pathname === "/home" ? "white" : "inherit",
              }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/my-documents")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
                ".MuiListItemText-root, .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              backgroundColor:
                pathname === "/my-documents" ? "#397EF3" : "transparent",
                borderRadius: "6px",
                marginBottom: "3px",
                width: "220px",
                height: "50px",
                justifyContent: "space-between",
                marginLeft:"10px",  
            }}
          >
            <ListItemIcon>
              <Description
                sx={{
                  color: pathname === "/my-documents" ? "white" : "inherit",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="My Documents"
              sx={{
                color: pathname === "/my-documents" ? "white" : "inherit",
              }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/trash")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
                ".MuiListItemText-root, .MuiListItemIcon-root": {
                  color: "white",
                 
                },
              },
              backgroundColor:
                pathname === "/trash" ? "#397EF3" : "transparent",
                borderRadius: "6px",
                marginBottom: "3px",
                width: "220px",
                height: "50px",
                justifyContent: "space-between",
                marginLeft:"10px",  
            }}
          >
            <ListItemIcon>
              <DeleteOutlineOutlined
                sx={{
                  color: pathname === "/trash" ? "white" : "inherit",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Trash"
              sx={{
                color: pathname === "/trash" ? "white" : "inherit",
              }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/search-history")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
                ".MuiListItemText-root, .MuiListItemIcon-root": {
                  color: "white",
            
                },
              },
              backgroundColor:
                pathname === "/search-history" ? "#397EF3" : "transparent",
              borderRadius: "6px",
              marginBottom: "3px",
              width: "220px",
              height: "50px",
              justifyContent: "space-between",
              marginLeft:"10px",  
            }}
          >
            <ListItemIcon>
              <PlagiarismOutlined
                sx={{
                  color: pathname === "/search-history" ? "white" : "inherit",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Search History"
              sx={{
                color: pathname === "/search-history" ? "white" : "inherit",
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
export default SideNav;
