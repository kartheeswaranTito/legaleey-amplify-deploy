"use client"
import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  InputBase,
  Link,
  Tab,
  Typography,
  alpha,
  styled,
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
import NewButton from "../new-button/page";

export default function VerifiedTab() {
  const [value, setValue] = React.useState("1");
  const [view, setView] = React.useState<"table" | "grid">("table");

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

  return (
   <>
     
     

     {data.length > 0 && (
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
      )}
       
       
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
           <NewButton />
          )}
       
      
       </>
   
  );
}
