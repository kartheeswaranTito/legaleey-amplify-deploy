"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RenameIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const data = [
  { id: 1, file_name: "abc", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "180 MB" },
  { id: 2, file_name: "def", uploaded_date: "21/02/2024", file_type: "docx", file_size: "10 MB" },
  { id: 3, file_name: "ghi", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "11 MB" },
  { id: 4, file_name: "klm", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "200 MB" },
];

const columns: GridColDef<(typeof data)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'file_name',
    headerName: 'File Name',
    width: 150,
    editable: true,
  },
  {
    field: 'uploaded_date',
    headerName: 'Uploaded Date',
    width: 150,
    editable: true,
  },
  {
    field: 'file_type',
    headerName: 'File Type',
    width: 110,
    editable: true,
  },
  {
    field: 'file_size',
    headerName: 'File Size',
    width: 160,
    editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100
    // renderCell: (params: GridRenderCellParams<any>) => <ActionsMenu />,
  },
];

const ActionsMenu = async() => {
 
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
        <MenuItem onClick={handleClose}>
          <RenameIcon style={{ marginRight: 8 }} />
          Rename
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <InfoIcon style={{ marginRight: 8 }} />
          Info
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteIcon style={{ marginRight: 8 }} />
          Delete
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DownloadIcon style={{ marginRight: 8 }} />
          Download
        </MenuItem>
      </Menu>
    </div>
  );
};

export default function DataGridDemo() {
  return (
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
      />
    </Box>
  );
}
