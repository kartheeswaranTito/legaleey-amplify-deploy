"use client";
import React, { useState } from "react";
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
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FolderIcon from "@mui/icons-material/Folder";
interface Row {
  id: number;
  name: string;
  date: string;
  size: string;
  verified: boolean;
  type: string;
}

const initialRows: Row[] = [
  {
    id: 1,
    name: "Tito.pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    verified: false,
    type: "pdf",
  },
  {
    id: 2,
    name: "Tito222222222.pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    verified: false,
    type: "pdf",
  },
  {
    id: 3,
    name: "Titokjwdiuowiduouw.pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    verified: false,
    type: "pdf",
  },
  {
    id: 4,
    name: "Tito.docx",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    verified: false,
    type: "docx",
  },
  {
    id: 5,
    name: "Titowluouou.pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    verified: false,
    type: "pdf",
  },
  {
    id: 6,
    name: "Tito.docx",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    verified: false,
    type: "docx",
  },
  {
    id: 7,
    name: "Tito.folder",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    verified: false,
    type: "folder",
  },
  {
    id: 8,
    name: "Tito.pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    verified: false,
    type: "pdf",
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

export default function UnverifiedTab() {
  const [value, setValue] = useState<string>("2");
  const [rows, setRows] = useState<Row[]>(initialRows);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    []
  );
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [verifiedFileName, setVerifiedFileName] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleVerifyFile = (id: number) => {
    const row = rows.find((row) => row.id === id);
    if (row) {
      setRows(
        rows.map((row) => (row.id === id ? { ...row, verified: true } : row))
      );
      setVerifiedFileName(row.name);
      setSnackbarOpen(true);
    }
  };

  const handleDeleteFile = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
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

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  // table
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: "header-spacing",
      cellClassName: "cell-spacing",
      renderCell: (params: any) => (
        <Box sx={{ display: "flex", alignItems: "center", fontWeight: "500" }}>
          {getFileIcon(params.row.type)}
          {params.row.name}
          {!params.row.verified && (
            <ErrorOutlineIcon sx={{ color: "#DC362E", ml: 1 }} />
          )}
        </Box>
      ),
    },
    {
      field: "date",
      headerName: "Date Created",
      flex: 1,
      headerClassName: "header-spacing",
      cellClassName: "cell-spacing",
    },
    {
      field: "size",
      headerName: "File Size",
      flex: 1,
      headerClassName: "header-spacing",
      cellClassName: "cell-spacing",
    },
    {
      field: "actions",
      headerName: "",
      width: 280,
      disableColumnMenu: true,
      renderCell: (params: any) => (
        <Box>
          <Button
            onClick={() => handleVerifyFile(params.row.id)}
            variant="outlined"
          >
            <DoneAllIcon />
            Verify File
          </Button>
          <Button onClick={() => handleOpenInfoDialog(params.row)}>
            <InfoOutlinedIcon
              sx={{
                color: "#65656B",
                width: "24px",
                height: "24px",
                boxShadow: "0",
              }}
            />
          </Button>
          {/* TOOLTIP */}
          <Tooltip
            title="Move to trash"
            placement="top"
            arrow
            enterDelay={500}
            leaveDelay={200}
            componentsProps={{
              tooltip: {
                sx: {
                  width: "90px",
                  height: "22px",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  opacity: "1",
                  background: "#7E7E83",
                  fontSize: "12px",
                },
              },
            }}
          >
            <Button onClick={() => handleOpenDeleteDialog(params.row)}>
              <DeleteOutlineOutlinedIcon
                sx={{
                  color: "#65656B",
                  width: "24px",
                  height: "24px",
                }}
              />
            </Button>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <>
      {selectionModel.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Button
            onClick={handleVerifyAll}
            variant="outlined"
            startIcon={<DoneAllIcon />}
            sx={{ mr: 1 }}
          >
            VERIFY ALL
          </Button>
          <Button
            onClick={handleDeleteAll}
            variant="outlined"
            startIcon={<DeleteOutlineOutlinedIcon />}
            color="error"
          >
            DELETE ALL
          </Button>
        </Box>
      )}

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows.filter((row) => !row.verified)}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(newSelection) =>
            setSelectionModel(newSelection)
          }
          rowSelectionModel={selectionModel}
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

      {/* Dialogs and Snackbars */}

      <Dialog
        open={openInfoDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            width: "444px",
            height: "165px",
            borderRadius: "8px",
          },
        }}
      >
        <DialogTitle>File cannot be verified</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontFamily: "Roboto",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "19.92px",
              letterSpacing: "0.4px",
              textAlign: "left",
            }}
          >
            File type jpeg is not a supported file. File types supported are
            PDF, Microsoft Word only.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            width: "444px",
            height: "154px",
            borderRadius: "8px",
          },
        }}
      >
        <DialogTitle>Delete forever?</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontFamily: "Roboto",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "19.92px",
              letterSpacing: "0.4px",
              textAlign: "left",
            }}
          >
            {`"${selectedRow?.name}"`} will be deleted forever. Want to delete
            it?
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
            style={{ background: "#DC362E", color: "white" }}
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          icon={false}
          severity="success"
          sx={{
            width: "370px",
            height: "auto",
            borderRadius: "4px",
            background: "#0A9060",
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "6px 16px",
            gap: "3px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2">
              {verifiedFileName} is successfully verified
            </Typography>
            <Button
              size="small"
              sx={{
                color: "white",
                width: "68px",
                height: "24px",
                padding: "1px 2px",
                ml: 2,
                minWidth: "68px",
                whiteSpace: "nowrap",
              }}
            >
              View File
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </Alert>
      </Snackbar>
    </>
  );
}
