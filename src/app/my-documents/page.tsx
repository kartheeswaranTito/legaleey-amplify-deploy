"use client"
import CommonLayout from "@/components/CommonLayout";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Tab,
  Typography,
  Checkbox,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
  Tooltip,
  createMuiTheme,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import { Add, Menu as MenuIcon, GridView as GridViewIcon } from "@mui/icons-material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import CloseIcon from "@mui/icons-material/Close";
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';
interface Row {
  id: number;
  name: string;
  date: string;
  size: string;
  verified: boolean;
}

const initialRows: Row[] = [
  { id: 1, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 2, name: 'Tito222222222.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 3, name: 'Titokjwdiuowiduouw.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 4, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 5, name: 'Titowluouou.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 6, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 7, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 8, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
 

];


const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case "pdf":
      return "/fileIcons/pdf-Icon.jpg"; 
    case "docx":
      return "/fileIcons/word-Icon.jpg"; 
    case "Folder":
      return "/fileIcons/folder-Icon.jpg"; 
   
    default:
      return "/fileIcons/pdf-Icon.jpg"; 
    }
  };

export default function MyDocuments() {
	const [value, setValue] = React.useState("1");
  const [view, setView] = React.useState<"table" | "grid">("table");
  const [value, setValue] = useState<string>("2");
  const [rows, setRows] = useState<Row[]>(initialRows);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [verifiedFileName, setVerifiedFileName] = useState('');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

  const handleViewToggle = (newView: "table" | "grid") => {
    setView(newView);
  };

  const data = [
    { id: 1, file_name: "Sample 1", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "180 MB" },
    { id: 2, file_name: "File1", uploaded_date: "21/02/2024", file_type: "docx", file_size: "10 MB" },
    { id: 3, file_name: "Sample folder 1", uploaded_date: "25/02/2024", file_type: "Folder", file_size: "-" },
    { id: 4, file_name: "File 2", uploaded_date: "21/02/2024", file_type: "docx", file_size: "200 MB" },
    { id: 5, file_name: "Sample folder 2", uploaded_date: "27/02/2024", file_type: "Folder", file_size: "-" },
    { id: 6, file_name: "Sample 2", uploaded_date: "23/02/2024", file_type: "pdf", file_size: "200 MB" },
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

  const columns: GridColDef<(typeof data)[number]>[] = [
    {
      field: "file_name",
      headerName: "File Name",
      flex: 1,
      renderCell: (params: GridRenderCellParams<any>) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={getFileIcon(params.row.file_type)}
            alt={params.row.file_type}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <span style={{ color: "#393940" }}>{params.row.file_name}</span>
        </Box>
      ),
      headerClassName: 'custom-header',
    },
    {
      field: "uploaded_date",
      headerName: "Uploaded Date",
      flex: 1,
      renderCell: (params: GridRenderCellParams<any>) => (
        <span style={{ color: "#3F3F46" }}>{params.row.uploaded_date}</span>
      ),
      headerClassName: 'custom-header',
    },
    {
      field: "file_type",
      headerName: "File Type",
      flex: 1,
      renderCell: (params: GridRenderCellParams<any>) => (
        <span style={{ color: "#3F3F46" }}>{params.row.file_type}</span>
      ),
      headerClassName: 'custom-header',
    },
    {
      field: "file_size",
      headerName: "File Size",
      flex: 1,
      renderCell: (params: GridRenderCellParams<any>) => (
        <span style={{ color: "#3F3F46" }}>{params.row.file_size}</span>
      ),
      headerClassName: 'custom-header',
    },
    {
      field: 'actions',
      headerName: '',
      width: 100,
      renderCell: (params: GridRenderCellParams<any>) => <ActionsMenu />,
    },
  ];


  const ActionsMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
      <IconButton aria-label="more" aria-controls="action-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose} style={{ color: '#7E7E83' }}>
          <DriveFileRenameOutlineOutlinedIcon style={{ marginRight: 8 }} />
          Rename
        </MenuItem> */}
        <MenuItem onClick={handleClose} style={{ color: '#7E7E83' }}>
          <RemoveRedEyeOutlinedIcon style={{ marginRight: 8 }} />
          Open
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ color: '#7E7E83' }}>
          <FileDownloadOutlinedIcon style={{ marginRight: 8 }} />
          Download
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ color: '#7E7E83' }}>
          <InfoOutlinedIcon style={{ marginRight: 8 }} />
          Info
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ color: '#7E7E83' }}>
          <DeleteOutlineOutlinedIcon style={{ marginRight: 8 }} />
          Delete
        </MenuItem>
        {/* <hr style={{ borderTop: '1px solid #7E7E83', margin: '8px 0' }} />  */}
        {/* <MenuItem onClick={handleClose} style={{ color: '#7E7E83' }}>
          <DeleteOutlineOutlinedIcon style={{ marginRight: 8 }} />
          Delete
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ color: '#7E7E83' }}>
          <ContentCopyIcon style={{ marginRight: 8 }} />
          Make a copy
        </MenuItem> */}
       
      </Menu>
    </div>
    );  
  };

  const handleVerifyFile = (id: number) => {
    const row = rows.find(row => row.id === id);
    if (row) {
      setRows(rows.map(row => row.id === id ? { ...row, verified: true } : row));
      setVerifiedFileName(row.name);
      setSnackbarOpen(true);
    }
  };

  const handleDeleteFile = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleVerifyAll = () => {
    setRows([]); 
    setSelectionModel([]); 
  };

  const handleDeleteAll = () => {
    setRows([]);  
    setSelectionModel([]);  
  };

  const handleOpenInfoDialog = (row: Row) => {
    setSelectedRow(row);
    setOpenInfoDialog(true);
  };

  const handleOpenDeleteDialog = (row: Row) => {
    setSelectedRow(row);
    setOpenDeleteDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenInfoDialog(false);
    setOpenDeleteDialog(false);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

 //table 
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 300,
      headerClassName: 'header-spacing',
      cellClassName: 'cell-spacing',
      
      renderCell: (params: any) => (
        <Box sx={{ display: 'flex', alignItems: 'center', fontWeight:'500' }}>
        <img src={getFileIcon(params.row.type)}/>
        <Typography sx={{ml:'5px'}}>{params.row.type}</Typography>
          {params.row.name}
          {!params.row.verified && (
            <ErrorOutlineIcon sx={{ color: '#DC362E', ml: 1}} />
          )}
        </Box>
      ),
    },

     // DEmo
    {
      field: 'date',
      headerName: 'Date Created',
      width: 250,
      headerClassName: 'header-spacing',
      cellClassName: 'cell-spacing',
    },
    // {
    //   field: 'date',
    //   headerName: 'Date Created',
    //   width: 250,
    //   headerClassName: 'header-spacing',
    //   cellClassName: 'cell-spacing',
    //   renderCell: (params: any) => (
    //     <Typography
    //       sx={{
    //         fontFamily: 'Roboto',
    //         fontSize: '14px',
    //         fontWeight: 400,
    //         lineHeight: '19px',
    //          textAlign: 'left'
    //       }}
    //     >
    //       {params.row.date}
    //     </Typography>
    //   ),
    // },
    {
      field: 'size',
      headerName: 'File Size',
      width: 250,
      headerClassName: 'header-spacing',
      cellClassName: 'cell-spacing',
    },
    {
      field: 'actions',
      headerName: '',
      width: 250,
      disableColumnMenu: true,
      renderCell: (params: any) => (
        <Box>
          <Button onClick={() => handleVerifyFile(params.row.id)} variant="outlined">
            <DoneAllIcon />
            Verify File
          </Button>
          <Button onClick={() => handleOpenInfoDialog(params.row)} >
            <InfoOutlinedIcon sx={{ color: '#65656B', width: '24px', height: '24px', boxShadow:'0' }} />
          </Button>

          {/* TOOLTIP */}
          <Tooltip title="Move to trash" placement="top" arrow enterDelay={500} leaveDelay={200}
            componentsProps={{
              tooltip: {
                sx: {
                  width: '90px',
                  height: '22px',
                  borderRadius:'4px',
                  padding: '4px 8px',
                  opacity: '1',
                  background: '#7E7E83',
                  fontSize: '12px',
                }
              }
            }}
          >
            <Button onClick={() => handleOpenDeleteDialog(params.row)} >
              <DeleteOutlineOutlinedIcon sx={{
                color: '#65656B',
                width: '24px',
                height: '24px',
              }} />
            </Button>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <CommonLayout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="my-documents/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          My Documents
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" component="h2" className="legaleey-heading" >
        My Documents
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <TabList
            onChange={handleChange}
            aria-label="Document tabs"
            // centered
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="VERIFIED" value="1" />
            <Tab label="UNVERIFIED" value="2" />
            <Tab label="IN PROGRESS" value="3" />
          </TabList>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mx:4 }}>
          <IconButton onClick={() => handleViewToggle("table")}
            sx={{ color: view === "table" ? "#1469FB" : "default" }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton onClick={() => handleViewToggle("grid")}
            sx={{ color: view === "grid" ? "#1469FB" : "default" }}
          >
            <GridViewIcon />
          </IconButton>
        </Box>
        <TabPanel value="1">
          {data.length > 0 ? (
            view === "table" ? (
              <Box sx={{ height: 400, width: '100%' }}>
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
                  checkboxSelection
                  disableRowSelectionOnClick
                  sx={{
                    '& .custom-header': {
                      color: '#393940',
                      fontWeight: 'bold',
                    },
                  }}
                />
              </Box>
            ) : (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {data.map((item) => (
                  <Paper key={item.id} sx={{ padding: 2, minWidth: 200 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={getFileIcon(item.file_type)}
                        alt={item.file_type}
                        style={{ width: 24, height: 24, marginRight: 8 }}
                      />
                      <Typography variant="h6">{item.file_name}</Typography>
                    </Box>
                    <Typography>Uploaded Date: {item.uploaded_date}</Typography>
                    <Typography>File Type: {item.file_type}</Typography>
                    <Typography>File Size: {item.file_size}</Typography>
                    <div>
                      <ActionsMenu />
                    </div>
                  </Paper>
                ))}
              </Box>
            )
          ) : (
            <Box sx={{ mt: 20, textAlign: 'center' }}>
              <Typography variant="h6" component="h1" gutterBottom color=" #323B4A">
                There Are No Verified Documents
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Add />}
                sx={{ textAlign: 'center' }}
              >
                ADD NEW
              </Button>
            </Box>
          )}
        </TabPanel>
        <TabPanel value="2">
          {/* You can add similar logic here for UNVERIFIED documents */}
        </TabPanel>
        <TabPanel value="3">
          {/* You can add similar logic here for IN PROGRESS documents */}
        </TabPanel>
      </TabContext>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="my-documents/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit">
          My Documents
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" component="h2">
        My Documents
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <TabList
            onChange={handleChange}
            aria-label="Document tabs"
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="VERIFIED" value="1" />
            <Tab label="UNVERIFIED" value="2" />
            <Tab label="IN PROGRESS" value="3" />
          </TabList>
        </Box>
        <Box
          sx={{
            width: '1140px',
            height: '30px',
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <Box>
            <Button onClick={handleVerifyAll} variant="outlined" startIcon={<DoneAllIcon />} sx={{ mr: 1 }}>
              VERIFY ALL
            </Button>
            <Button onClick={handleDeleteAll} variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />} color="error">
              DELETE ALL
            </Button>
          </Box>
        </Box>
        <TabPanel value="1">
          <DataGrid
            rows={rows.filter(row => row.verified)}
            columns={columns}
            checkboxSelection
            onRowSelectionModelChange={(newSelection) => setSelectionModel(newSelection)}
            rowSelectionModel={selectionModel}
          />
        </TabPanel>

        {/*UNVERIFIED  */}
        <TabPanel value="2">
          <DataGrid
            rows={rows.filter(row => !row.verified)}
            columns={columns}
            checkboxSelection
            onRowSelectionModelChange={(newSelection) => setSelectionModel(newSelection)}
            rowSelectionModel={selectionModel}
            style={{ width: '1140px', height: '352px' }} 
          />
        </TabPanel>
        <TabPanel value="3">
          <Typography>No documents in progress.</Typography>
        </TabPanel>
      </TabContext>

       {/* DIALOG INFO */}
      <Dialog open={openInfoDialog} onClose={handleCloseDialog} 
       PaperProps={{
          style: {
            width: '444px',
            height: '165px',
            borderRadius: '8px',
          },
        }}>
        <DialogTitle>File cannot be verified</DialogTitle>
        <DialogContent>
          <DialogContentText
          sx={{
            fontFamily: 'Roboto',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '19.92px',
            letterSpacing: '0.4px',
            textAlign: 'left',

          }}
          >
            File type jpeg is not a supported file. File types supported are PDF, Microsoft Word only.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>


       {/* DIALOG DELETE */} 
       <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            width: '444px',
            height: '154px',
            borderRadius: '8px',
          },
        }}
      >
        <DialogTitle>Delete forever?</DialogTitle>
        <DialogContent>
  <DialogContentText
    sx={{
      fontFamily: 'Roboto',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '19.92px',
      letterSpacing: '0.4px',
      textAlign: 'left',
    }}
  >
    "{selectedRow?.name}" will be deleted forever. Want to delete it?
  </DialogContentText>
</DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (selectedRow?.id !== undefined) {
                handleDeleteFile(selectedRow.id);
              }
              handleCloseDialog();
            }}
            style={{ background: '#DC362E', color: 'white' }}
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>

{/* Red snackbar 
<Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        severity="error"
        sx={{
          width: '400px',
          height: 'auto',
          borderRadius: '4px',
          background: '#D32F2F',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Typography variant="body2">
            {verifiedFileName} cannot be verified
          </Typography>
          <Typography variant="caption">
            File type jpeg is not supported file. File types supported are PDF, Microsoft Word only
          </Typography>
        </div>
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Alert>
    </Snackbar>
*/}

 {/* Green snackbar  */}

    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        icon={false}
        severity="success"
        sx={{
          width: '370px',
          height: 'auto',
          borderRadius: '4px',
          background: '#0A9060',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 16px',
          gap: '3px',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" >
            {verifiedFileName} is successfully verified
          </Typography>
          <Button
            size="small"
            sx={{
              color: 'white',
              width: '68px',
              height: '24px',
              padding: '1px 2px',
              ml: 2,
              minWidth: '68px',
              whiteSpace: 'nowrap',
            }}
          >
            View File
          </Button>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Alert>
    </Snackbar>
    </CommonLayout>
  );
}



// "use client";
// import React, { useState } from 'react';
// import CommonLayout from "@/components/CommonLayout";
// import {
//   Box,
//   Breadcrumbs,
//   Button,
//   Link,
//   Tab,
//   Typography,
//   Checkbox,
//   IconButton,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Snackbar,
//   Alert,
//   Tooltip,
// } from "@mui/material";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import DescriptionIcon from '@mui/icons-material/Description';
// import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
// import CloseIcon from "@mui/icons-material/Close";
// import '@fontsource/roboto/700.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/400.css';

// interface Row {
//   id: number;
//   name: string;
//   date: string;
//   size: string;
//   verified: boolean;
// }

// const initialRows: Row[] = [
//   { id: 1, name: 'Legal_Contract.pdf', date: 'June 21, 2022', size: '20.00 MB', verified: false },
//   { id: 2, name: 'AmazonNDA.docx', date: 'June 21, 2022', size: '30.00 MB', verified: false },
//   { id: 3, name: 'AmazonNDA.docx', date: 'June 21, 2022', size: '22.00 MB', verified: false },
//   { id: 4, name: 'MicrosoftLegalContracts.pdf', date: 'June 21, 2022', size: '100.00 MB', verified: false },
//   { id: 5, name: 'ContractsforMerger.pdf', date: 'June 21, 2022', size: '100.00 MB', verified: false },
//   { id: 6, name: 'CompanyMergers.pdf', date: 'June 21, 2022', size: '100.00 MB', verified: false },
// ];

// export default function MyDocuments() {
//   const [value, setValue] = useState<string>("2");
//   const [rows, setRows] = useState<Row[]>(initialRows);
//   const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
//   const [openInfoDialog, setOpenInfoDialog] = useState(false);
//   const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
//   const [selectedRow, setSelectedRow] = useState<Row | null>(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [verifiedFileName, setVerifiedFileName] = useState('');

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   const handleVerifyFile = (id: number) => {
//     const row = rows.find(row => row.id === id);
//     if (row) {
//       setRows(rows.map(row => row.id === id ? { ...row, verified: true } : row));
//       setVerifiedFileName(row.name);
//       setSnackbarOpen(true);
//     }
//   };

//   const handleDeleteFile = (id: number) => {
//     setRows(rows.filter(row => row.id !== id));
//   };

//   const handleVerifyAll = () => {
//     setRows([]); 
//     setSelectionModel([]); 
//   };

//   const handleDeleteAll = () => {
//     setRows([]);  
//     setSelectionModel([]);  
//   };

//   const handleOpenInfoDialog = (row: Row) => {
//     setSelectedRow(row);
//     setOpenInfoDialog(true);
//   };

//   const handleOpenDeleteDialog = (row: Row) => {
//     setSelectedRow(row);
//     setOpenDeleteDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenInfoDialog(false);
//     setOpenDeleteDialog(false);
//   };

//   const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setSnackbarOpen(false);
//   };

//   const getFileIcon = (fileName: string) => {
//     const extension = fileName.split('.').pop()?.toLowerCase();
//     switch (extension) {
//       case 'pdf':
//         return <PictureAsPdfIcon sx={{ color: '#DC362E', mr: 1 }} />;
//       case 'doc':
//       case 'docx':
//         return <DescriptionIcon sx={{ color: '#3F51B5', mr: 1 }} />;
//       default:
//         return null;
//     }
//   };

//   const columns = [
//     {
//       field: 'name',
//       headerName: 'Name',
//       width: 300,
//       headerClassName: 'header-spacing',
//       cellClassName: 'cell-spacing',
//       renderCell: (params: any) => (
//         <Box sx={{ display: 'flex', alignItems: 'center', fontWeight:'500' }}>
//           {getFileIcon(params.row.name)}
//           {params.row.name}
//           {!params.row.verified && (
//             <ErrorOutlineIcon sx={{ color: '#DC362E', ml: 1}} />
//           )}
//         </Box>
//       ),
//     },
//     {
//       field: 'date',
//       headerName: 'Date Created',
//       width: 250,
//       headerClassName: 'header-spacing',
//       cellClassName: 'cell-spacing',
//     },
//     {
//       field: 'size',
//       headerName: 'File Size',
//       width: 250,
//       headerClassName: 'header-spacing',
//       cellClassName: 'cell-spacing',
//     },
//     {
//       field: 'actions',
//       headerName: '',
//       width: 250,
//       disableColumnMenu: true,
//       renderCell: (params: any) => (
//         <Box>
//           <Button onClick={() => handleVerifyFile(params.row.id)} variant="outlined">
//             <DoneAllIcon />
//             Verify File
//           </Button>
//           <Button onClick={() => handleOpenInfoDialog(params.row)} >
//             <InfoOutlinedIcon sx={{ color: '#65656B', width: '24px', height: '24px', boxShadow:'0' }} />
//           </Button>

//           <Tooltip title="Move to trash" placement="top" arrow enterDelay={500} leaveDelay={200}
//             componentsProps={{
//               tooltip: {
//                 sx: {
//                   width: '90px',
//                   height: '22px',
//                   borderRadius:'4px',
//                   padding: '4px 8px',
//                   opacity: '1',
//                   background: '#7E7E83',
//                   fontSize: '12px',
//                 }
//               }
//             }}
//           >
//             <Button onClick={() => handleOpenDeleteDialog(params.row)} >
//               <DeleteOutlineOutlinedIcon sx={{
//                 color: '#65656B',
//                 width: '24px',
//                 height: '24px',
//               }} />
//             </Button>
//           </Tooltip>
//         </Box>
//       ),
//     },
//   ];

//   return (
//     <CommonLayout>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//           href="my-documents/"
//         >
//           <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//         </Link>
//         <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit">
//           My Documents
//         </Link>
//       </Breadcrumbs>
//       <Typography variant="h4" component="h2">
//         My Documents
//       </Typography>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
//           <TabList
//             onChange={handleChange}
//             aria-label="Document tabs"
//             textColor="primary"
//             indicatorColor="primary"
//             variant="scrollable"
//             scrollButtons="auto"
//           >
//             <Tab label="VERIFIED" value="1" />
//             <Tab label="UNVERIFIED" value="2" />
//             <Tab label="IN PROGRESS" value="3" />
//           </TabList>
//         </Box>
//         <Box
//           sx={{
//             width: '1140px',
//             height: '30px',
//             display: 'flex',
//             justifyContent: 'flex-end',
//             mb: 2,
//           }}
//         >
//           <Box>
//             <Button onClick={handleVerifyAll} variant="outlined" startIcon={<DoneAllIcon />} sx={{ mr: 1 }}>
//               VERIFY ALL
//             </Button>
//             <Button onClick={handleDeleteAll} variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />} color="error">
//               DELETE ALL
//             </Button>
//           </Box>
//         </Box>
//         <Box sx={{ height: 400, width: '100%' }}>
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             checkboxSelection
//             disableRowSelectionOnClick
//             rowSelectionModel={selectionModel}
//             onRowSelectionModelChange={(newSelectionModel: React.SetStateAction<GridRowSelectionModel>) => setSelectionModel(newSelectionModel)}
//           />
//         </Box>
//         <Dialog
//           open={openInfoDialog}
//           onClose={handleCloseDialog}
//           aria-labelledby="info-dialog-title"
//           aria-describedby="info-dialog-description"
//         >
//           <DialogTitle id="info-dialog-title">{"Document Information"}</DialogTitle>
//           <DialogContent>
//             <DialogContentText id="info-dialog-description">
//               {selectedRow && (
//                 <>
//                   <Typography variant="body1"><strong>Name:</strong> {selectedRow.name}</Typography>
//                   <Typography variant="body1"><strong>Date Created:</strong> {selectedRow.date}</Typography>
//                   <Typography variant="body1"><strong>File Size:</strong> {selectedRow.size}</Typography>
//                 </>
//               )}
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} autoFocus>
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//         <Dialog
//           open={openDeleteDialog}
//           onClose={handleCloseDialog}
//           aria-labelledby="delete-dialog-title"
//           aria-describedby="delete-dialog-description"
//         >
//           <DialogTitle id="delete-dialog-title">{"Delete Document"}</DialogTitle>
//           <DialogContent>
//             <DialogContentText id="delete-dialog-description">
//               Are you sure you want to delete this document?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog}>Cancel</Button>
//             <Button onClick={() => handleDeleteFile(selectedRow!.id)} autoFocus>
//               Delete
//             </Button>
//           </DialogActions>
//         </Dialog>
//         <Snackbar
//           open={snackbarOpen}
//           autoHideDuration={6000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//         >
//           <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
//             File "{verifiedFileName}" verified successfully!
//           </Alert>
//         </Snackbar>
//       </TabContext>
//     </CommonLayout>
//   );
// }

