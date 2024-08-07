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
	Popover,
	Typography,
	Switch,
} from "@mui/material";
import {
	SettingsOutlined,
	AccountCircleOutlined,
	Logout,
	ShieldOutlined,
} from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { useAuthenticator } from "@aws-amplify/ui-react";

const TopNav: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { signOut } = useAuthenticator();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: "#F7F4F7",
				borderRadius: "0 0 0 20px ",
				pb: 1,
			}}
		>
			<Toolbar>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-start",
						padding: "10px",
						ml: 28,
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
							placeholder='Enter keyword to search all folders or select folder to search'
							variant='standard'
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
				</Box>
				<Box
					sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
				>
					<Box
						sx={{
							marginRight: "20px",
							display: "flex",
							alignItems: "center",
							width: "250px",
						}}
					>
						<Typography color='#000'>Turn off Notifications</Typography>
						<Switch />
					</Box>
					<HelpOutlineIcon sx={{ color: "black", marginRight: 1 }} />
					<Tooltip title='Account settings'>
						<IconButton
							onClick={handleClick}
							size='small'
							sx={{ ml: 2 }}
							aria-controls={open ? "account-menu" : undefined}
							aria-haspopup='true'
							aria-expanded={open ? "true" : undefined}
						>
							<Avatar sx={{ bgcolor: "#1469fb", width: 32, height: 32 }}>
								VA
							</Avatar>
						</IconButton>
					</Tooltip>
				</Box>
				<Popover
					id='profile-popover'
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
				>
					<Box
						sx={{
							width: 300,
							padding: "10px",
						}}
					>
						<Box
							sx={{
								padding: "10px",
								display: "flex",
								alignItems: "center",
							}}
							onClick={handleClose}
						>
							<Avatar
								sx={{
									bgcolor: "#1469fb",
									width: 32,
									height: 32,
									marginRight: "10px",
									alignSelf: "center",
								}}
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<Typography
									sx={{
										fontSize: "1rem",
										fontWeight: "bold",
									}}
								>
									User Name
								</Typography>
								<Typography
									sx={{
										fontSize: ".75rem",
									}}
								>
									testuserprofile@testmail.com
								</Typography>
							</Box>
						</Box>
						<Divider variant='middle' />
						<Box
							sx={{
								paddingY: "15px",

								display: "flex",
								flexDirection: "column",
							}}
						>
							<Box
								sx={{
									display: "flex",
									gap: "10px",
									margin: "10px",
								}}
								onClick={handleClose}
							>
								<AccountCircleOutlined />
								<Typography>Profile information</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									gap: "10px",
									margin: "10px",
								}}
								onClick={handleClose}
							>
								<SettingsOutlined />
								<Typography>Account Settings</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									gap: "10px",
									margin: "10px",
								}}
								onClick={handleClose}
							>
								<ShieldOutlined />
								<Typography>Login & Security</Typography>
							</Box>
						</Box>
						<Divider variant='middle' />
						<Box
							sx={{
								padding: "10px",
								display: "flex",
							}}
						>
							<Box
								sx={{
									width: "80%",
								}}
							>
								<Typography
									sx={{
										fontSize: ".9rem",
										fontWeight: 500,
									}}
								>
									Turn of pop-up notification
								</Typography>
								<Typography
									sx={{
										fontSize: "0.7rem",
									}}
								>
									Only turn-off toast notifications for uploaded, approved and
									rejected files
								</Typography>
							</Box>
							<Switch />
						</Box>
						<Divider variant='middle' />
						<Box
							sx={{
								padding: "10px",
							}}
						>
							<Button
								variant='outlined'
								color='error'
								sx={{
									width: "100%",
								}}
								onClick={signOut}
							>
								SignOut
							</Button>
						</Box>
					</Box>
				</Popover>
			</Toolbar>
		</AppBar>
	);
};

export default TopNav;
