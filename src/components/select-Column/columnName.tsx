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

interface Props {
	columnName: string;
}

const ColumnName: React.FC<Props> = ({ columnName }) => {
	const [editOn, setEditOn] = useState(false);

	function handleEditOn(status: boolean) {
		setEditOn(status);
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
				value={columnName}
				variant='standard'
				sx={{
					width: "60%",
				}}
			/>
			<Box>
				<IconButton>
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
