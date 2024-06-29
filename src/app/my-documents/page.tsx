// "use client";
// import CommonLayout from "@/components/CommonLayout";
// import * as React from "react";
// import {
//   Box,
//   Breadcrumbs,
//   Button,
//   Container,
//   InputBase,
//   Link,
//   Tab,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Menu,
//   MenuItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
// import HomeIcon from "@mui/icons-material/Home";
// import { Add, MoreVert, Edit, GetApp, Info, Delete, Menu as MenuIcon, ViewModule as GridViewIcon } from "@mui/icons-material";
// import { useState } from "react";

// export default function MyDocuments() {
//   const [value, setValue] = useState("1");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [view, setView] = useState<"table" | "grid">("table");

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   const handleMenuClick = (event, row) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedRow(row);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedRow(null);
//   };

//   const handleMenuItemClick = (action) => {
//     console.log(`Action: ${action}, Row: `, selectedRow);
//     handleMenuClose();
//   };

//   const data = [
//     { file_name: "abc", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "180 MB" },
//     { file_name: "def", uploaded_date: "21/02/2024", file_type: "docx", file_size: "10 MB" },
//     { file_name: "ghi", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "11 MB" },
//     { file_name: "klm", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "200 MB" },
//   ];

//   const handleViewToggle = (view: "table" | "grid") => {
//     setView(view);
//   };

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
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//         >
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
//         
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
//         <TabPanel value="1">
//           {data.length === 0 ? (
//             <Box sx={{ mt: 20, textAlign: 'center' }}>
//               <Typography variant="h6" component="h1" gutterBottom color="#323B4A">
//                 There Are No Verified Documents
//               </Typography>
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<Add />}
//                 sx={{ textAlign: 'center' }}
//               >
//                 ADD NEW
//               </Button>
//             </Box>
//           ) : (
//             <Box>
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
//                 <IconButton onClick={() => handleViewToggle("table")}
//                    sx={{ color: view === "table" ? "#1469FB" : "default" }}
//                    >
//                   <MenuIcon />
//                 </IconButton>
//                 <IconButton onClick={() => handleViewToggle("grid")}
//                     sx={{ color: view === "grid" ? "#1469FB" : "default" }}
//                     >
//                   <GridViewIcon />
//                 </IconButton>
//               </Box>
//               {view === "table" ? (
//                 <TableContainer component={Paper}>
//                   <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell>File Name</TableCell>
//                         <TableCell>Uploaded Date</TableCell>
//                         <TableCell>File Type</TableCell>
//                         <TableCell>File Size</TableCell>
//                         <TableCell> </TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {data.map((row, index) => (
//                         <TableRow
//                           key={index}
//                           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                           <TableCell component="th" scope="row">
//                             {row.file_name}
//                           </TableCell>
//                           <TableCell>{row.uploaded_date}</TableCell>
//                           <TableCell>{row.file_type}</TableCell>
//                           <TableCell>{row.file_size}</TableCell>
//                           <TableCell align="right">
//                             <IconButton onClick={(event) => handleMenuClick(event, row)}>
//                               <MoreVert />
//                             </IconButton>
//                             <Menu
//                               anchorEl={anchorEl}
//                               open={Boolean(anchorEl)}
//                               onClose={handleMenuClose}
//                             >
//                               <MenuItem onClick={() => handleMenuItemClick('rename')}>
//                                 <ListItemIcon>
//                                   <Edit fontSize="small" />
//                                 </ListItemIcon>
//                                 <ListItemText>Rename</ListItemText>
//                               </MenuItem>
//                               <MenuItem onClick={() => handleMenuItemClick('download')}>
//                                 <ListItemIcon>
//                                   <GetApp fontSize="small" />
//                                 </ListItemIcon>
//                                 <ListItemText>Download</ListItemText>
//                               </MenuItem>
//                               <MenuItem onClick={() => handleMenuItemClick('info')}>
//                                 <ListItemIcon>
//                                   <Info fontSize="small" />
//                                 </ListItemIcon>
//                                 <ListItemText>Info</ListItemText>
//                               </MenuItem>
//                               <MenuItem onClick={() => handleMenuItemClick('delete')}>
//                                 <ListItemIcon>
//                                   <Delete fontSize="small" />
//                                 </ListItemIcon>
//                                 <ListItemText>Delete</ListItemText>
//                               </MenuItem>
//                             </Menu>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               ) : (
//                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//                   {data.map((item) => (
//                     <Paper key={item.id} sx={{ padding: 2, minWidth: 200 }}>
//                       <Typography variant="h6">{item.file_name}</Typography>
//                       <Typography>Uploaded Date: {item.uploaded_date}</Typography>
//                       <Typography>File Type: {item.file_type}</Typography>
//                       <Typography>File Size: {item.file_size}</Typography>
//                       <IconButton onClick={(event) => handleMenuClick(event, item)}>
//                         <MoreVert />
//                       </IconButton>
//                       <Menu
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl)}
//                         onClose={handleMenuClose}
//                       >
//                         <MenuItem onClick={() => handleMenuItemClick('rename')}>
//                           <ListItemIcon>
//                             <Edit fontSize="small" />
//                           </ListItemIcon>
//                           <ListItemText>Rename</ListItemText>
//                         </MenuItem>
//                         <MenuItem onClick={() => handleMenuItemClick('download')}>
//                           <ListItemIcon>
//                             <GetApp fontSize="small" />
//                           </ListItemIcon>
//                           <ListItemText>Download</ListItemText>
//                         </MenuItem>
//                         <MenuItem onClick={() => handleMenuItemClick('info')}>
//                           <ListItemIcon>
//                             <Info fontSize="small" />
//                           </ListItemIcon>
//                           <ListItemText>Info</ListItemText>
//                         </MenuItem>
//                         <MenuItem onClick={() => handleMenuItemClick('delete')}>
//                           <ListItemIcon>
//                             <Delete fontSize="small" />
//                           </ListItemIcon>
//                           <ListItemText>Delete</ListItemText>
//                         </MenuItem>
//                       </Menu>
//                     </Paper>
//                   ))}
//                 </Box>
//               )}
//             </Box>
//           )}
//         </TabPanel>
//         <TabPanel value="2">
//           {/* Content for UNVERIFIED tab */}
//         </TabPanel>
//         <TabPanel value="3">
//           {/* Content for IN PROGRESS tab */}
//         </TabPanel>
//       </TabContext>
//     </CommonLayout>
//   );
// }


"use client";
import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  InputBase,
  Link,
  Tab,
  Typography,
  Paper,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import { Add, MoreVert, Edit, GetApp, Info, Delete, Menu as MenuIcon, GridView as GridViewIcon } from "@mui/icons-material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function MyDocuments() {
  const [value, setValue] = useState("1");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [view, setView] = useState<"table" | "grid">("table");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, row: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleMenuItemClick = (action: string) => {
    console.log(`Action: ${action}, Row: `, selectedRow);
    handleMenuClose();
  };

  const data = [
    { id: 1, file_name: "abc", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "180 MB" },
    { id: 2, file_name: "def", uploaded_date: "21/02/2024", file_type: "docx", file_size: "10 MB" },
    { id: 3, file_name: "ghi", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "11 MB" },
    { id: 4, file_name: "klm", uploaded_date: "21/02/2024", file_type: "pdf", file_size: "200 MB" },
  ];

  const columns = [
    { field: "file_name", headerName: "File Name", flex: 1 },
    { field: "uploaded_date", headerName: "Uploaded Date", flex: 1 },
    { field: "file_type", headerName: "File Type", flex: 1 },
    { field: "file_size", headerName: "File Size", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: (params: any) => (
        <IconButton onClick={(event) => handleMenuClick(event, params.row)}>
          <MoreVert />
        </IconButton>
      ),
    },
  ];

  const handleViewToggle = (view: "table" | "grid") => {
    setView(view);
  };

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
        <TabPanel value="1">
  {data.length === 0 ? (
    <Box sx={{ mt: 20, textAlign: 'center' }}>
      <Typography variant="h6" component="h1" gutterBottom color="#323B4A">
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
  ) : (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
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
      {view === "table" ? (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={data.length}  // Set pageSize to display all rows without pagination
            rowsPerPageOptions={[data.length]}  // Remove pagination controls
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                fontWeight: "bold",
              },
            }}
          />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {data.map((item) => (
            <Paper key={item.id} sx={{ padding: 2, minWidth: 200 }}>
              <Typography variant="h6">{item.file_name}</Typography>
              <Typography>Uploaded Date: {item.uploaded_date}</Typography>
              <Typography>File Type: {item.file_type}</Typography>
              <Typography>File Size: {item.file_size}</Typography>
              <IconButton onClick={(event) => handleMenuClick(event, item)}>
                <MoreVert />
              </IconButton>
            </Paper>
          ))}
        </Box>
      )}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuItemClick('rename')}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText>Rename</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('download')}>
          <ListItemIcon>
            <GetApp fontSize="small" />
          </ListItemIcon>
          <ListItemText>Download</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('info')}>
          <ListItemIcon>
            <Info fontSize="small" />
          </ListItemIcon>
          <ListItemText>Info</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('delete')}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )}
</TabPanel>

        <TabPanel value="2">
          {/* Content for UNVERIFIED tab */}
        </TabPanel>
        <TabPanel value="3">
          {/* Content for IN PROGRESS tab */}
        </TabPanel>
      </TabContext>
    </CommonLayout>
  );
}
