"use client";
import {
	Box,
	Breadcrumbs,
	Grid,
	Link,
	Typography,
	IconButton,
	Button,
	Tooltip,
	FormControlLabel,
	FormGroup,
	Checkbox,
	Divider,
	RadioGroup,
	Radio,
	TextField,
	Modal,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SearchLayout from "@/components/SearchLayout";
import FilterIcon from "@mui/icons-material/FilterAltOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Folder, PictureAsPdf } from "@mui/icons-material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InsertDriveIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SelectColumn from "@/components/select-Column/selectColumn";
import SearchFilter from "@/components/SearchFilter";
import FirstPageIcon from "@mui/icons-material/FirstPage";

const data = [
	{
		id: 1,
		fileName: "Legal_Contract.pdf",
		party: "Veraz Networks Inc",
		clauseNumber: "Three",
		dates: "June 21, 2022",
		percentage: "20%",
		currency: "$ 0.001, $ 0.52 $ ,1000000.00",
		jurisdiction: "Securities and Exchange Commission",
		governingLaw:
			"This Agreement and any dispute or claim arising out of or in connection with it shall be governed by and construed in accordance with the laws of the State of N",
		executionDate: "June 21, 2022",
		terminationDate: "June 21, 2022",
	},

	{
		id: 2,
		fileName: "Legal_Contract.pdf",
		party: "Veraz Networks Inc",
		clauseNumber: "Three",
		dates: "June 21, 2022",
		percentage: "20%",
		currency: "$ 0.001 $ 0.52 $ 1000000.00",
		jurisdiction: "Securities and Exchange Commission",
		governingLaw:
			"This Agreement and any dispute or claim arising out of or in connection hjhjhjhjsjhdjhjhj with it shall be governed by and construed in accordance with the laws of the State of N",
		executionDate: "June 21, 2022",
		terminationDate: "June 21, 2022",
	},
	{
		id: 3,
		fileName: "Legal_Contract.folder",
		party: "Veraz Networks Inc",
		clauseNumber: "Three",
		dates: "June 21, 2022",
		percentage: "20%",
		currency: "$ 0.001 $ 0.52 $ 1000000.00",
		jurisdiction: "Securities and Exchange Commission",
		governingLaw:
			"This Agreement and any dispute or claim arising out of or in connection hjhjhjhjsjhdjhjhj with it shall be governed by and construed in accordance with the laws of the State of N",
		executionDate: "June 21, 2022",
		terminationDate: "June 21, 2022",
	},
	{
		id: 4,
		fileName: "Legal_Contract.doc",
		party: "Veraz Networks Inc",
		clauseNumber: "Three",
		dates: "June 21, 2022",
		percentage: "20%",
		currency: "$ 0.001 $ 0.52 $ 1000000.00",
		jurisdiction: "Securities and Exchange Commission",
		governingLaw:
			"This Agreement and any dispute or claim arising out of or in connection hjhjhjhjsjhdjhjhj with it shall be governed by and construed in accordance with the laws of the State of N",
		executionDate: "June 21, 2022",
		terminationDate: "June 21, 2022",
	},
];
const getFileIcon = (fileName: string) => {
	const fileExtension = fileName.split(".").pop()?.toLowerCase();
	switch (fileExtension) {
		case "pdf":
			return (
				<PictureAsPdf
					style={{ width: 24, height: 24, marginRight: 8, color: "#DC362E" }}
				/>
			);
		case "doc":
			return (
				<ArticleOutlinedIcon
					style={{ width: 24, height: 24, marginRight: 8, color: "#3473DD" }}
				/>
			);
		case "folder":
			return (
				<Folder
					style={{ width: 24, height: 24, marginRight: 8, color: "#79808A" }}
				/>
			);
		default:
			return (
				<Folder
					style={{ width: 24, height: 24, marginRight: 8, color: "#79808A" }}
				/>
			);
	}
};

const columns: GridColDef[] = [
	{
		field: "fileName",
		headerName: "File Name & Search Results",
		width: 300,
		renderCell: (params) => (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				{getFileIcon(params.value)}
				<Typography>{params.value}</Typography>
			</Box>
		),
	},
	{ field: "party", headerName: "Party", width: 200 },
	{ field: "clauseNumber", headerName: "Clause Number", width: 150 },
	{ field: "dates", headerName: "Dates", width: 150 },
	{ field: "percentage", headerName: "Percentage", width: 150 },
	{
		field: "currency",
		headerName: "Currency",
		width: 200,
		renderCell: (params) => (
			<Typography style={{ whiteSpace: "pre-line" }}>{params.value}</Typography>
		),
	},
	{
		field: "jurisdiction",
		headerName: "Jurisdiction",
		width: 250,
		renderCell: (params) => (
			<Typography style={{ whiteSpace: "pre-line" }}>{params.value}</Typography>
		),
	},
	{
		field: "governingLaw",
		headerName: "Governing Law",
		width: 400,
		renderCell: (params) => (
			<Typography style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
				{params.value}
			</Typography>
		),
	},
	{ field: "executionDate", headerName: "Execution Date", width: 150 },
	{ field: "terminationDate", headerName: "Termination Date", width: 150 },
];

export default function SearchResult() {
	const [open, setOpen] = useState(false);
	const [selectColumnOpen, setSelectColumnOpen] = useState(false);
	const [openFilter, setOpenFilter] = useState(false);
	const handleOpen = () => setOpen(true);
	const [filterMargin, setfilterMargin] = useState("0px");
	const [searchmovement, setSearchMovement] = useState("0px");

	const handleClose = () => setOpen(false);
	function handleSelectColumnChange(nowOpen: boolean) {
		setSelectColumnOpen(nowOpen);
	}
	function handleFilterChange(nowOpen: boolean) {
		setOpenFilter(nowOpen);

		setDataGridMargin(nowOpen);
	}
	function setDataGridMargin(openFilter: boolean) {
		if (openFilter) {
			setfilterMargin("310px");
			setSearchMovement("80px");
		} else {
			setfilterMargin("0px");
			setSearchMovement("0px");
		}
	}

	return (
		<SearchLayout searchmovement={searchmovement}>
			<Grid>
				<Grid
					item
					xs={10}
					sx={{ borderBottom: 1, borderBlockColor: "#ECECED" }}
				>
					<Grid
						container
						alignItems='center'
					>
						<Grid
							item
							xs={2}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									backgroundColor: "#E9EEF6",
									p: 2,
								}}
								onClick={() => handleFilterChange(true)}
							>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<FilterIcon sx={{ mr: 1 }} />
									<Typography>Filters</Typography>
								</Box>
								<FirstPageIcon />
							</Box>
						</Grid>
						<Grid
							item
							xs={8}
							sx={{
								ml: filterMargin,
								padding: "0px",
							}}
						>
							<Breadcrumbs aria-label='breadcrumb'>
								<Link
									underline='hover'
									sx={{ display: "flex", alignItems: "center" }}
									color='inherit'
									href='home/'
								>
									<HomeIcon
										sx={{ mr: 0.5, ml: 2 }}
										fontSize='inherit'
									/>
								</Link>
								<Link
									underline='hover'
									sx={{ display: "flex", alignItems: "center" }}
									color='inherit'
								>
									Search
								</Link>
							</Breadcrumbs>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					sx={{
						ml: filterMargin,
					}}
					xs={12}
					container
					justifyContent='space-between'
					alignItems='center'
				>
					<Typography
						variant='h5'
						sx={{ ml: 2 }}
					>
						Search Result
					</Typography>
					<Box>
						<Tooltip
							title='Edit Column'
							placement='top'
						>
							<IconButton onClick={() => handleSelectColumnChange(true)}>
								<Box
									sx={{
										width: 32,
										height: 32,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										border: 1,
										borderColor: "#79808A",
										borderRadius: 1,
									}}
								>
									<EditIcon />
								</Box>
							</IconButton>
						</Tooltip>
						<Tooltip
							title='Download'
							placement='top'
						>
							<IconButton>
								<Box
									sx={{
										width: 32,
										height: 32,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										mr: 2,
										border: 1,
										borderColor: "#79808A",
										borderRadius: 1,
									}}
								>
									<DownloadIcon />
								</Box>
							</IconButton>
						</Tooltip>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{ ml: filterMargin, mr: 2 }}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#E9EEF6",
							p: 2,
							borderRadius: "36px",
							ml: 2,
						}}
					>
						<Typography sx={{ color: "#5F6774", fontWeight: "bold" }}>
							Search by:
						</Typography>
						<Button
							variant='contained'
							size='small'
							startIcon={<TuneIcon />}
							onClick={handleOpen}
						>
							ADVANCE SEARCH
						</Button>
					</Box>
				</Grid>

				{/* DataGrid Table */}
				<Grid
					item
					xs={12}
					sx={{ height: 400, mt: 2, ml: filterMargin }}
				>
					<DataGrid
						rows={data}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: {
									pageSize: 5,
								},
							},
						}}
						pageSizeOptions={[5]}
						// checkboxSelection
						// disableRowSelectionOnClick
						// sx={{
						//   "& .custom-header": {
						//     color: "#393940",
						//     fontWeight: "bold",
						//   },
						// }}
					/>
				</Grid>
			</Grid>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-title'
				aria-describedby='modal-description'
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "1312px", // Adjusted width
						minHeight: "700px", // Optional: Adjust the height
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
						borderRadius: 2,
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Typography
							id='modal-title'
							variant='h6'
						>
							Advance Search
						</Typography>
						<Box>
							<Tooltip title='Help'>
								<IconButton>
									<HelpOutlineIcon />
								</IconButton>
							</Tooltip>
							<IconButton onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</Box>
					</Box>
					<Divider sx={{ my: 2 }} />
					<Box id='modal-description'>
						<Typography sx={{ fontWeight: "bold" }}>Word Searching</Typography>
						{/* <TextField
        fullWidth
        label="Word Searching Text"
        variant="outlined"
        sx={{ mb: 2 }}
      /> */}
						<FormGroup>
							<FormControlLabel
								control={<Checkbox />}
								label='Match case'
							/>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label='Include inflections'
							/>
							<FormControlLabel
								control={<Checkbox />}
								label='Maintain order between words'
							/>
						</FormGroup>
						<Divider sx={{ my: 2 }} />
						<RadioGroup
							defaultValue='radio1'
							name='radio-buttons-group'
						>
							<FormControlLabel
								value='radio1'
								control={<Radio />}
								label='Search words anywhere in the document'
							/>
							<Box
								display='flex'
								alignItems='center'
							>
								<FormControlLabel
									value='radio2'
									control={<Radio />}
									label='Search within'
								/>
								<TextField
									type='number'
									variant='outlined'
									size='small'
									placeholder='50'
									sx={{ width: "60px", mr: 2 }} // Adjust styling as needed
								/>
								2-100 words allows
							</Box>
						</RadioGroup>
					</Box>
					<Divider sx={{ my: 2 }} />
					<Typography sx={{ fontWeight: "bold" }}>
						Select Files for Searching
					</Typography>
					<Typography>
						Select specific files and folders with your search terms to narrow
						your results and find what you need faster.
					</Typography>
					<Button
						variant='contained'
						color='primary'
						startIcon={<InsertDriveIcon />}
						size='small'
						sx={{
							mt: 2,
							backgroundColor: "#E9EEF6",
							color: "#393940",
							"&:hover": {
								backgroundColor: "#d8e2ed", // A slightly darker shade for hover effect
							},
						}}
					>
						Select Files for Searching
					</Button>

					<Box
						sx={{
							position: "absolute",
							bottom: 0,
							left: 0,
							right: 0,
							display: "flex",
							justifyContent: "flex-end",
							gap: 1,
							padding: 1,
							bgcolor: "background.paper", // Ensure the footer has the same background as the modal content
							// borderTop: '1px solid #ddd', // Optional: Add a border for distinction
						}}
					>
						<Button onClick={handleClose}>Reset</Button>
						<Button
							variant='contained'
							color='primary'
						>
							Apply
						</Button>
					</Box>
				</Box>
			</Modal>
			{selectColumnOpen ? (
				<SelectColumn
					onSelectColumnChange={handleSelectColumnChange}
					selectColumnOpen
				/>
			) : (
				<></>
			)}
			{openFilter ? (
				<SearchFilter
					onSearchFilterChange={handleFilterChange}
					openFilter
				/>
			) : (
				<></>
			)}
		</SearchLayout>
	);
}
