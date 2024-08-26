"use client";
import React, { useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FolderIcon from "@mui/icons-material/Folder";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RestoreIcon from "@mui/icons-material/Restore";
interface Row {
	id: number;
	name: string;
	type: string;
	date: string;
	size: string;
	status: string;
	progress: number;
}
const initialRows: Row[] = [
	{
		id: 1,
		name: "Tito1.pdf",
		type: "pdf",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		status: "inProgress",
		progress: 30,
	},
	{
		id: 2,
		name: "Doc1.docx",
		type: "docx",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		status: "inProgress",
		progress: 80,
	},
	{
		id: 3,
		name: "Tito2.pdf",
		type: "pdf",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		status: "inProgress",
		progress: 50,
	},
	{
		id: 4,
		name: "Tito3.pdf",
		type: "pdf",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		status: "inProgress",
		progress: 90,
	},
	{
		id: 5,
		name: "Doc2.docx",
		type: "docx",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		status: "inProgress",
		progress: 70,
	},
	{
		id: 6,
		name: "Tito4.pdf",
		type: "pdf",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		status: "inProgress",
		progress: 25,
	},
	{
		id: 7,
		name: "Doc3.docx",
		type: "docx",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		status: "inProgress",
		progress: 37,
	},
	{
		id: 8,
		name: "Doc4.docx",
		type: "docx",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		status: "inProgress",
		progress: 63,
	},
];
const getFileIcon = (fileType: string) => {
	switch (fileType) {
		case "pdf":
			return (
				<PictureAsPdfIcon
					style={{ width: 24, height: 24, marginRight: 8, color: "#DC362E" }}
				/>
			);
		case "docx":
			return (
				<ArticleOutlinedIcon
					style={{ width: 24, height: 24, marginRight: 8, color: "#3473DD" }}
				/>
			);
		case "Folder":
			return (
				<FolderIcon
					style={{ width: 24, height: 24, marginRight: 8, color: "#79808A" }}
				/>
			);
		default:
			return (
				<FolderIcon
					style={{ width: 24, height: 24, marginRight: 8, color: "#79808A" }}
				/>
			);
	}
};
const InProgressTab = () => {
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const columns: GridColDef[] = [
		{
			field: "name",
			headerName: "Name",
			flex: 2,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
			renderCell: (params: any) => {
				return (
					<Box sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
						{getFileIcon(params.row.type)}
						<Typography sx={{ ml: "5px" }}>{params.row.name}</Typography>
					</Box>
				);
			},
		},
		{
			field: "size",
			headerName: "File Size",
			flex: 1,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
		},
		{
			field: "action",
			headerName: "",
			width: 600,
			disableColumnMenu: true,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
			renderCell: (params: any) => {
				return (
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Box sx={{ ml: "140px", width: "50%", alignSelf: "center" }}>
							<LinearProgress
								variant='determinate'
								value={params.row.progress}
							/>
						</Box>
						<Button>
							<PauseCircleOutlineIcon />
						</Button>
						<Button>
							<CloseIcon />
						</Button>
					</Box>
				);
			},
		},
	];
	return (
		<Box sx={{ height: 400, width: "100%" }}>
			<Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
				{selectedRows.length > 0 && (
					<>
						<Button
							variant='outlined'
							color='primary'
							sx={{ mr: 2 }}
							startIcon={<RestoreIcon />}
						>
							Restore
						</Button>
						<Button
							variant='outlined'
							color='error'
							startIcon={<DeleteOutlineOutlinedIcon />}
						>
							DELETE
						</Button>
					</>
				)}
			</Box>
			<DataGrid
				rows={initialRows}
				columns={columns}
				checkboxSelection
				onRowSelectionModelChange={(newSelection) => {
					setSelectedRows(newSelection as number[]);
				}}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
			/>
		</Box>
	);
};
export default InProgressTab;
