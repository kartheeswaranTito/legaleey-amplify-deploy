"use client"; // Ensure this component is client-side

import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
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
	Switch,
	Popover,
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
import { Accordion, useAuthenticator } from "@aws-amplify/ui-react";

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
			sx={{ backgroundColor: "#F2F4F7", borderRadius: "0 0 0 20px" }}
		>
			<Toolbar>
				<Typography
					variant='h6'
					component='div'
					sx={{ flexGrow: 1 }}
				>
					{/* Top Navigation */}
				</Typography>

				<Box
					sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
				>
					<Box
						sx={{
							marginRight: "10px",
							display: "flex",
							alignItems: "center",
							justifyContent: "right",
							width: "250px",
						}}
					>
						<Typography color='#000'>Turn off Notifications</Typography>
						<Switch />
					</Box>
					<HelpOutlineIcon sx={{ color: "black", marginRight: 1 }} />

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
