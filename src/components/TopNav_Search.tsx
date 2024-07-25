"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  ListItemIcon,
  Button,
  TextField,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import {
  SettingsOutlined,
  AccountCircleOutlined,
  Logout,
  ShieldOutlined,
  Home,
} from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HomeIcon from "@mui/icons-material/HomeOutlined";

const TopNavSearch: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#F2F4F7",
      }}
    >
      <Toolbar>
        <Grid item xs={4}>
          <Typography variant="h5">LEGALEEY </Typography>
        </Grid>

        <Grid
          sx={{
            width: "65%",
            display: "flex",
            justifyContent: "flex-start",
            padding: "10px",
            ml: 15,
          }}
        >
          <Box
            sx={{
              width: "558px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#E9EEF6",
              borderRadius: "28px",
              padding: "10px 17px",
              gap: "8px",
            }}
          >
            <SearchIcon sx={{ color: "#5F6774" }} />
            <TextField
              fullWidth
              placeholder="Enter keyword to search all folders or select folder to search"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  padding: 0,
                  color: "#5F6774",
                  fontSize: "16px",
                },
              }}
            />
            <IconButton sx={{ color: "#5F6774" }}>
              <TuneIcon />
            </IconButton>
          </Box>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "float-right",
          }}
        >
          <Link href="/home">
            <Button
              variant="outlined"
              startIcon={<HomeIcon />}
              color="primary"
              sx={{
                borderRadius: "20px",
                ml: 2, 
              }}
            >
              Back to Home
            </Button>
          </Link>
          <HelpOutlineIcon sx={{ color: "#79808A", ml: 4 }} />
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 4 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ bgcolor: "#1469fb", width: 32, height: 32 }}>
                VA
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ bgcolor: "#1469fb", width: 32, height: 32 }} />
            Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            Personal Information
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SettingsOutlined fontSize="small" />
            </ListItemIcon>
            Account Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ShieldOutlined fontSize="small" />
            </ListItemIcon>
            Login & Security
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon></ListItemIcon>
            <Button variant="outlined" color="error" sx={{ width: "200px" }}>
              SIGN OUT
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavSearch;

// "use client";

// import React from "react";
// import { AppBar, Toolbar, Grid, Typography } from "@mui/material";

// const TopNav: React.FC = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#F2F4F7" }}>
//       <Toolbar>
//         <Grid container alignItems="center">
//           {/* Left Column */}
//           <Grid item xs={2} sx={{ textAlign: "left"}}>
//             <Typography variant="h5">
//               LEGALEEY
//             </Typography>
//           </Grid>
//           {/* Center Column */}
//           <Grid item xs={6} sx={{ textAlign: "center" }}>
//             <Typography variant="h6">
//               Center Column
//             </Typography>
//           </Grid>
//           {/* Right Column */}
//           <Grid item xs={4} sx={{ textAlign: "right" }}>
//             <Typography variant="h6">
//               Right Column
//             </Typography>
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default TopNav;
