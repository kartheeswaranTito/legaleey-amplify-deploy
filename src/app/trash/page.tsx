"use client";
import * as React from "react";
import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreIcon from "@mui/icons-material/Restore";
import Modal from "@mui/material/Modal";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { PanoramaSharp, Restore } from "@mui/icons-material";
import Image from "next/image";

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

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 450,
	bgcolor: "background.paper",

	boxShadow: 24,
	p: 4,
};

export default function Trash() {
	const [open1, setOpen1] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);
	const handleOpen1 = () => setOpen1(true);
	const handleClose1 = () => setOpen1(false);
	const handleOpen2 = () => setOpen2(true);
	const handleClose2 = () => setOpen2(false);
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
	const columns = [
		{
			field: "name",
			headerName: "Name",
			flex:1,
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
							{getFileIcon(params.row.type)}
							<Typography sx={{ ml: "5px" }}>{params.row.name}</Typography>
						</Box>
					);
				} else if (params.row.type === "docx") {
					return (
						<Box sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
							<ArticleOutlinedIcon />
							<Typography sx={{ ml: "5px" }}>{params.row.name}</Typography>
						</Box>
					);
				}
			},
		},
		{
			field: "date",
			headerName: "Date Changed",
			flex:1,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
		},
		{
			field: "size",
			headerName: "File Size",
			flex:1,
			headerClassName: "header-spacing",
			cellClassName: "cell-spacing",
		},
		{
			field: "originalLocation",
			headerName: "Original Location",
			flex:1,
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
						<Button onClick={handleOpen1}>
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
					mt: 2,
					mr:2,
					backgroundColor: "#eee",
					padding: "15px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Typography sx={{ alignSelf: "center", }}>
					Items in trash will be deleted after 30 days
				</Typography>
				<Button onClick={handleOpen2}>EMPTY TRASH</Button>
			</Box>
			
			{/* <Box sx={{ mt: "5px", textAlign: "center" }}>
				{initialRows ? (
					<DataGrid
						rows={initialRows}
						columns={columns}
						style={{ width: "1140px", height: "500px" }}
						initialState={{
							pagination: {
								paginationModel: {
									pageSize: 8,
								},
							},
						}}
						pageSizeOptions={[8]}
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
			</Box> */}
			 <Box sx={{ height: 400, width: "100%" ,mt:2,pr:2}}>
			 {initialRows ? (
              <DataGrid
                rows={initialRows}
                columns={columns}
               
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
            
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
			
			<Modal
				open={open1}
				onClose={handleClose1}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h5'
						component='h2'
						sx={{ fontWeight: "Bold", color: "#000" }}
					>
						Delete Forever?
					</Typography>
					<Typography
						id='modal-modal-description'
						sx={{ mt: 2, mb: "10px" }}
					>
						File will be deleted forever and cannot be restored
					</Typography>
					<Box sx={{ display: "flex", ml: "130px" }}>
						<Button onClick={handleClose1}>Cancel</Button>
						<Button variant='contained'>Delete Forever</Button>
					</Box>
				</Box>
			</Modal>
			<Modal
				open={open2}
				onClose={handleClose2}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h5'
						component='h2'
						sx={{ fontWeight: "Bold", color: "#000" }}
					>
						Delete Forever?
					</Typography>
					<Typography
						id='modal-modal-description'
						sx={{ mt: 2, mb: "10px" }}
					>
						All items in the trash will be deleted forever and cannot be
						restored
					</Typography>
					<Box sx={{ display: "flex", ml: "130px" }}>
						<Button onClick={handleClose2}>Cancel</Button>
						<Button
							variant='contained'
							color='error'
						>
							Delete Forever
						</Button>
					</Box>
				</Box>
			</Modal>
		</CommonLayout>
	);
}
