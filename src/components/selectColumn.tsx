import * as React from "react";
import { useState } from "react";
import {
	Box,
	Drawer,
	Button,
	Typography,
	IconButton,
	TextField,
	Switch,
} from "@mui/material";
import { Close, Edit } from "@mui/icons-material";

const drawerWidth = "300px";
function SelectColumn() {
	const [selectColumnOpen, setSelectColumnOpen] = useState(false);
	const [column1Name, setColumn1Name] = useState("Party");
	const [column2Name, setColumn2Name] = useState("Clause Number");
	const [column3Name, setColumn3Name] = useState("Jurisdiction");
	const [column4Name, setColumn4Name] = useState("Governing Law");
	const [column5Name, setColumn5Name] = useState("Execution Date");
	const [column6Name, setColumn6Name] = useState("Termination Date");

	function handleSelectColumnChange(nowOpen: boolean) {
		setSelectColumnOpen(nowOpen);
	}

	return (
		<>
			<Button onClick={() => handleSelectColumnChange(true)}>
				Open Select Column
			</Button>
			<Drawer
				open={selectColumnOpen}
				onClose={() => handleSelectColumnChange(false)}
				anchor='right'
				sx={{
					width: drawerWidth,
					zIndex: -1,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
						backgroundColor: "#F7F9FC",
					},
				}}
			>
				<Box
					sx={{
						marginTop: "70px",
						padding: "15px",
					}}
					component='div'
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",

							marginBottom: "20px",
						}}
					>
						<Typography
							sx={{
								fontWeight: "bold",
								alignSelf: "center",
								fontSize: "18px",
							}}
						>
							Choose Column to Display
						</Typography>
						<IconButton onClick={() => handleSelectColumnChange(false)}>
							<Close />
						</IconButton>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>{column1Name}</Typography>
						<Box>
							<IconButton>
								<Edit />
							</IconButton>
							<Switch defaultChecked />
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "20px",
						}}
					>
						<Typography>{column2Name}</Typography>
						<Box>
							<IconButton>
								<Edit />
							</IconButton>
							<Switch defaultChecked />
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "20px",
						}}
					>
						<Typography>{column3Name}</Typography>
						<Box>
							<IconButton>
								<Edit />
							</IconButton>
							<Switch defaultChecked />
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "20px",
						}}
					>
						<Typography>{column4Name}</Typography>
						<Box>
							<IconButton>
								<Edit />
							</IconButton>
							<Switch defaultChecked />
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "20px",
						}}
					>
						<Typography>{column5Name}</Typography>
						<Box>
							<IconButton>
								<Edit />
							</IconButton>
							<Switch defaultChecked />
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "20px",
						}}
					>
						<Typography>{column6Name}</Typography>
						<Box>
							<IconButton>
								<Edit />
							</IconButton>
							<Switch defaultChecked />
						</Box>
					</Box>
				</Box>
			</Drawer>
		</>
	);
}

export default SelectColumn;
