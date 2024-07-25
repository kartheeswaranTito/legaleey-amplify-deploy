"use client";
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
import { Close, Edit, Done } from "@mui/icons-material";
import { setDefaultAutoSelectFamilyAttemptTimeout } from "net";

interface Props {
	columnName: string;
	onNameChange: Function;
}

const ColumnName: React.FC<Props> = ({ columnName, onNameChange }) => {
	const [editOn, setEditOn] = useState(false);
	const [tempName, setTempName] = useState("");

	function handleEditOn(status: boolean) {
		setEditOn(status);
	}

	function handleTempNameChange(event: any) {
		setTempName(event.target.value);
		console.log(tempName);
	}

	return editOn ? (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				marginBottom: "20px",
			}}
		>
			<TextField
				value={tempName}
				variant='standard'
				onChange={handleTempNameChange}
				sx={{
					width: "60%",
				}}
			/>
			<Box>
				<IconButton
					onClick={() => {
						if (tempName !== "") {
							onNameChange(tempName);
							handleEditOn(false);
						} else {
							handleEditOn(false);
						}
					}}
				>
					<Done />
				</IconButton>
				<IconButton>
					<Close onClick={() => handleEditOn(false)} />
				</IconButton>
			</Box>
		</Box>
	) : (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				marginBottom: "20px",
			}}
		>
			<Typography>{columnName}</Typography>
			<Box>
				<IconButton onClick={() => handleEditOn(true)}>
					<Edit />
				</IconButton>
				<Switch defaultChecked />
			</Box>
		</Box>
	);
};

export default ColumnName;
