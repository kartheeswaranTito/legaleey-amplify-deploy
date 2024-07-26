"use client";
import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
  Drawer,
} from "@mui/material";
import {
  Menu as MenuIcon,
  GridView as GridViewIcon,
  PictureAsPdf,
  Description,
  Folder,
} from "@mui/icons-material";
import {
  DataGrid,
  GridColDef,
  GridColumnVisibilityModel,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import NewButton from "../new-button/newbutton";
import CloseIcon from "@mui/icons-material/CloseOutlined";

export default function VerifiedTab() {
  const [view, setView] = React.useState<"table" | "grid">("table");
  const [rowSelection, setRowSelection] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState<any>(null);

  const handleViewToggle = (newView: "table" | "grid") => {
    setView(newView);
  };

  const data = [
    {
      id: 1,
      file_name: "Sample 1",
      uploaded_date: "21/02/2024",
      file_type: "pdf",
      file_size: "180 MB",
    },
    {
      id: 2,
      file_name: "File1",
      uploaded_date: "21/02/2024",
      file_type: "docx",
      file_size: "10 MB",
    },
    {
      id: 3,
      file_name: "Sample folder 1",
      uploaded_date: "25/02/2024",
      file_type: "Folder",
      file_size: "-",
    },
    {
      id: 4,
      file_name: "File 2",
      uploaded_date: "21/02/2024",
      file_type: "docx",
      file_size: "200 MB",
    },
    {
      id: 5,
      file_name: "Sample folder 2",
      uploaded_date: "27/02/2024",
      file_type: "Folder",
      file_size: "-",
    },
    {
      id: 6,
      file_name: "Sample 2",
      uploaded_date: "23/02/2024",
      file_type: "pdf",
      file_size: "200 MB",
    },
  ];

  const getFileIcon = (
    fileType: string, 
    width: number = 24, 
    height: number = 24
  ) => {
    const iconStyles = { width, height, marginRight: 8 };
  
    switch (fileType) {
      case "pdf":
        return <PictureAsPdf style={{ ...iconStyles, color: "#DC362E" }} />;
      case "docx":
        return <ArticleOutlinedIcon style={{ ...iconStyles, color: "#3473DD" }} />;
      case "Folder":
        return <Folder style={{ ...iconStyles, color: "#79808A" }} />;
      default:
        return <Folder style={{ ...iconStyles, color: "#79808A" }} />;
    }
  };

  const columns: GridColDef<(typeof data)[number]>[] = [
    {
      field: "file_name",
      headerName: "File Name",
      flex: 1,
      renderCell: (params: GridRenderCellParams<any>) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {getFileIcon(params.row.file_type)}
          <span style={{ color: "#393940" }}>{params.row.file_name}</span>
        </Box>
      ),
      headerClassName: "custom-header",
    },
    {
      field: "uploaded_date",
      headerName: "Uploaded Date",
      flex: 1,
      renderCell: (params: GridRenderCellParams<any>) => (
        <span style={{ color: "#3F3F46" }}>{params.row.uploaded_date}</span>
      ),
      headerClassName: "custom-header",
    },
    {
      field: "file_type",
      headerName: "File Type",
      flex: 1,
      renderCell: (params: GridRenderCellParams<any>) => (
        <span style={{ color: "#3F3F46" }}>{params.row.file_type}</span>
      ),
      headerClassName: "custom-header",
    },
    {
      field: "file_size",
      headerName: "File Size",
      flex: 1,
      renderCell: (params: GridRenderCellParams<any>) => (
        <span style={{ color: "#3F3F46" }}>{params.row.file_size}</span>
      ),
      headerClassName: "custom-header",
    },
    {
      field: "actions",
      headerName: "",
      width: 100,
      renderCell: (params: GridRenderCellParams<any>) => (
        <ActionsMenu row={params.row} />
      ),
    },
  ];

  const ActionsMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleInfoClick = () => {
      handleClose();
      setSelectedRow(row);
      setDrawerOpen(true);
    };

    return (
      <div>
        <IconButton
          aria-label="more"
          aria-controls="action-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="action-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} style={{ color: "#7E7E83" }}>
            <RemoveRedEyeOutlinedIcon style={{ marginRight: 8 }} />
            Open
          </MenuItem>
          <MenuItem onClick={handleClose} style={{ color: "#7E7E83" }}>
            <FileDownloadOutlinedIcon style={{ marginRight: 8 }} />
            Download
          </MenuItem>
          <MenuItem onClick={handleInfoClick} style={{ color: "#7E7E83" }}>
            <InfoOutlinedIcon style={{ marginRight: 8 }} />
            Info
          </MenuItem>
          <MenuItem onClick={handleClose} style={{ color: "#7E7E83" }}>
            <DeleteOutlineOutlinedIcon style={{ marginRight: 8 }} />
            Delete
          </MenuItem>
        </Menu>
      </div>
    );
  };

  const [columnVisibilityModel, setColumnVisibilityModel] =
    React.useState<GridColumnVisibilityModel>({
      actions: true,
    });

  const handleRowSelectionChange = (selectionModel: any) => {
    setRowSelection(selectionModel.length > 0);
    setColumnVisibilityModel((prevModel) => ({
      ...prevModel,
      actions: selectionModel.length === 0,
    }));
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedRow(null);
  };

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Box
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s",
          marginRight: drawerOpen ? "300px" : "0",
        }}
      >
        {data.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            {!rowSelection ? (
              <>
                <IconButton
                  onClick={() => handleViewToggle("table")}
                  sx={{ color: view === "table" ? "#1469FB" : "default" }}
                >
                  <MenuIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleViewToggle("grid")}
                  sx={{ color: view === "grid" ? "#1469FB" : "default" }}
                >
                  <GridViewIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Button
                  variant="outlined"
                  startIcon={<FileDownloadOutlinedIcon />}
                  color="primary"
                  sx={{ mx: 2 }}
                >
                  Download
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DeleteOutlineOutlinedIcon />}
                  color="error"
                >
                  DELETE
                </Button>
              </>
            )}
          </Box>
        )}

        {data.length > 0 ? (
          view === "table" ? (
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={data}
                columns={columns}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={(newModel) =>
                  setColumnVisibilityModel(newModel)
                }
                onRowSelectionModelChange={(selectionModel) =>
                  handleRowSelectionChange(selectionModel)
                }
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
                  "& .custom-header": {
                    color: "#393940",
                    fontWeight: "bold",
                  },
                }}
              />
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {data.map((item) => (
                <Paper key={item.id} sx={{ padding: 2, minWidth: 200 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {getFileIcon(item.file_type)}
                    <Typography variant="h6">{item.file_name}</Typography>
                  </Box>
                  <Typography>Uploaded Date: {item.uploaded_date}</Typography>
                  <Typography>File Type: {item.file_type}</Typography>
                  <Typography>File Size: {item.file_size}</Typography>
                  <div>
                    <ActionsMenu row={item} />
                  </div>
                </Paper>
              ))}
            </Box>
          )
        ) : (
          <NewButton />
        )}
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          width: 300,
          flexShrink: 0,
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          zIndex: 1200,
        }}
      >
        <Box sx={{ width: 300, padding: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", color: "grey.600" }}
            >
              <InfoOutlinedIcon />
              <Typography
                variant="body1"
                sx={{ marginLeft: 1, color: "grey.600" }}
              >
                Info
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {selectedRow && (
            <>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  border: "1px solid grey.300",
                  padding: 2,
                }}
              >
             {getFileIcon(selectedRow.file_type, 49, 56)}
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {selectedRow.file_name}
                </Typography>
              </Box>
                <hr/>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  border: "1px solid grey.300",
                  borderRadius: "10px",
                  height: "160px",
                  padding: 2,
                  mb: 2,
                }}
              >
                image
              </Box>

              <hr />
              <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold",color:"#393940" }}>File Details</Typography>
              <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold",color:"#393940" }}>Type </Typography>
              <Typography  sx={{ mt: 2 }}>{selectedRow.file_type}</Typography>
              <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold",color:"#393940" }}>Size</Typography>
              <Typography  sx={{ mt: 2 }}> {selectedRow.file_size}</Typography>
              <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold",color:"#393940" }}>Uploaded Date</Typography>
              <Typography  sx={{ mt: 2 }}>{selectedRow.uploaded_date}</Typography>
            </>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}
