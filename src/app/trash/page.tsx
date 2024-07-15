"use client";

import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreIcon from "@mui/icons-material/Restore";

import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { Restore } from "@mui/icons-material";

// sample data
interface Row {
	id: number;
	name: string;
	type: string;
	date: string;
	size: string;
	originalLocation: string;
	status: string;
}

const initialRows: Row[] = [
	{
		id: 1,
		name: "Tito1.pdf",
		type: "pdf",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		originalLocation: "My Documents",
		status: "trash",
	},
	{
		id: 2,
		name: "Doc1.docx",
		type: "docx",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		originalLocation: "Cisco Legal",
		status: "trash",
	},
	{
		id: 3,
		name: "Tito2.pdf",
		type: "pdf",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		originalLocation: "My Documents",
		status: "trash",
	},
	{
		id: 4,
		name: "Tito3.pdf",
		type: "pdf",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		originalLocation: "My Documents",
		status: "trash",
	},
	{
		id: 5,
		name: "Doc2.docx",
		type: "docx",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		originalLocation: "Subscriptions",
		status: "trash",
	},
	{
		id: 6,
		name: "Tito4.pdf",
		type: "pdf",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		originalLocation: "My Documents",
		status: "trash",
	},
	{
		id: 7,
		name: "Doc3.docx",
		type: "docx",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		originalLocation: "My Documents",
		status: "trash",
	},
	{
		id: 8,
		name: "Doc4.docx",
		type: "docx",
		date: "Jan 24, 1999",
		size: "19.00 MB",
		originalLocation: "My Documents",
		status: "trash",
	},
];

const getFileIcon = (fileType: string) => {
	switch (fileType) {
		case "pdf":
			return "/fileIcons/pdf-Icon.png";
		case "docx":
			return "/fileIcons/word-Icon.png";
		case "Folder":
			return "/fileIcons/folder-Icon.png";

		default:
			return "/fileIcons/folder-Icon.png";
	}
};

export default function Trash() {
	const columns = [
		{
			field: "name",
			headerName: "Name",
			width: 225,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
			renderCell: (params: any) => {
				if (params.row.type === "pdf") {
					return (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								mt: "10px",
							}}
						>
							<img src={getFileIcon(params.row.type)} />
							<Typography sx={{ ml: "5px" }}>{params.row.name}</Typography>
						</Box>
					);
				} else if (params.row.type === "docx") {
					return (
						<Box sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
							<ArticleIcon />
							<Typography sx={{ ml: "5px" }}>{params.row.name}</Typography>
						</Box>
					);
				}
			},
		},
		{
			field: "date",
			headerName: "Date Changed",
			width: 225,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
		},
		{
			field: "size",
			headerName: "File Size",
			width: 225,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
		},
		{
			field: "originalLocation",
			headerName: "Original Location",
			width: 225,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
		},
		{
			field: "action",
			headerName: "",
			width: 225,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
			renderCell: (params: any) => {
				return (
					<Box sx={{ display: "flex", ml: "60px" }}>
						<Button>
							<RestoreIcon />
						</Button>
						<Button>
							<DeleteOutlineIcon />
						</Button>
					</Box>
				);
			},
		},
	];
	return (
		<CommonLayout>
			<Breadcrumbs aria-label='breadcrumb'>
				<Link
					underline='hover'
					sx={{ display: "flex", alignItems: "center" }}
					color='inherit'
					href='my-documents/'
				>
					<HomeIcon
						sx={{ mr: 0.5 }}
						fontSize='inherit'
					/>
				</Link>
				<Link
					underline='hover'
					sx={{ display: "flex", alignItems: "center" }}
					color='inherit'
				>
					Trash
				</Link>
			</Breadcrumbs>
			<Typography
				variant='h4'
				component='h2'
			>
				Trash
			</Typography>
			<Box
				sx={{
					mt: 5,
					backgroundColor: "#eee",
					padding: "15px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Typography sx={{ alignSelf: "center" }}>
					Items in trash will be deleted after 30 days
				</Typography>
				<Button>EMPTY TRASH</Button>
			</Box>

			<Box sx={{ mt: "5px", textAlign: "center" }}>
				{initialRows ? (
					<DataGrid
						rows={initialRows}
						columns={columns}
						style={{ width: "1140px", height: "352px" }}
					/>
				) : (
					<Typography
						variant='h6'
						component='h1'
						gutterBottom
						color=' #323B4A'
					>
						Nothing in Trash
					</Typography>
				)}
			</Box>
		</CommonLayout>
	);
}

{
	/*  */
}
