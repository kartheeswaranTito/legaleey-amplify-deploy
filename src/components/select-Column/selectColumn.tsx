import * as React from "react";
import { useState } from "react";
import { Box, Drawer, Button, Typography, IconButton } from "@mui/material";
import { Close, Edit } from "@mui/icons-material";
import ColumnName from "./columnName";

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

	function handleColumnName1(newName: string) {
		setColumn1Name(newName);
	}
	function handleColumnName2(newName: string) {
		setColumn2Name(newName);
	}
	function handleColumnName3(newName: string) {
		setColumn3Name(newName);
	}
	function handleColumnName4(newName: string) {
		setColumn4Name(newName);
	}
	function handleColumnName5(newName: string) {
		setColumn5Name(newName);
	}
	function handleColumnName6(newName: string) {
		setColumn6Name(newName);
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
					<ColumnName
						columnName={column1Name}
						onNameChange={handleColumnName1}
					/>
					<ColumnName
						columnName={column2Name}
						onNameChange={handleColumnName2}
					/>
					<ColumnName
						columnName={column3Name}
						onNameChange={handleColumnName3}
					/>
					<ColumnName
						columnName={column4Name}
						onNameChange={handleColumnName4}
					/>
					<ColumnName
						columnName={column5Name}
						onNameChange={handleColumnName5}
					/>
					<ColumnName
						columnName={column6Name}
						onNameChange={handleColumnName6}
					/>
				</Box>
			</Drawer>
		</>
	);
}

export default SelectColumn;
