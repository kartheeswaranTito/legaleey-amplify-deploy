
"use client";
import React, { useState } from 'react';
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
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import CloseIcon from "@mui/icons-material/Close";
import '@fontsource/roboto/700.css';

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
  { id: 8, name: 'Titoinouhoihnouho.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
];


export default function MyDocuments() {
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

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 300,
      headerClassName: 'header-spacing',
      cellClassName: 'cell-spacing',
      renderCell: (params: any) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {params.row.name}
          {!params.row.verified && (
            <ErrorOutlineIcon sx={{ color: '#DC362E', ml: 1}} />
          )}
        </Box>
      ),
    },
    {
      field: 'date',
      headerName: 'Date Created',
      width: 250,
      headerClassName: 'header-spacing',
      cellClassName: 'cell-spacing',
    },
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
      renderCell: (params: any) => (
        <Box>
          <Button onClick={() => handleVerifyFile(params.row.id)} variant="outlined">
            <DoneAllIcon />
            Verify File
          </Button>
          <Button onClick={() => handleOpenInfoDialog(params.row)} >
            <InfoOutlinedIcon sx={{ color: '#65656B', width: '24px', height: '24px', boxShadow:'0' }} />
          </Button>
          <Tooltip title="Move to trash" placement="top" arrow enterDelay={500} leaveDelay={200}
            componentsProps={{
              tooltip: {
                sx: {
                  width: '100px',
                  height: 'auto',
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

      <Dialog open={openInfoDialog} onClose={handleCloseDialog}>
        <DialogTitle>File cannot be verified</DialogTitle>
        <DialogContent>
          <DialogContentText>
            File type jpeg is not a supported file. File types supported are PDF, Microsoft Word only.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete forever?</DialogTitle>
        <DialogContent>
          <DialogContentText>
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          action={<></>}
          iconMapping={{}}
          severity="success"
          sx={{
            width: '370px',
            height: 'auto',
            background: '#0A9060',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ flex: 1 }}>
            {verifiedFileName} is successfully verified
          </Typography>
          <Button size="small" sx={{ color: 'white' }}>
            View File
          </Button>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar>
    </CommonLayout>
  );
}
