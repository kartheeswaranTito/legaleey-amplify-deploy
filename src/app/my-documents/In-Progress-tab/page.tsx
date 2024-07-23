import React, { ReactNode } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

// initial value

interface Row {
  id: number;
  name: string;
  type: string;
  date: string;
  size: string;
  status: string;
  progress: number;
}
const initialRows: Row[] = [
  {
    id: 1,
    name: "Tito1.pdf",
    type: "pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    status: "inProgress",
    progress: 30,
  },
  {
    id: 2,
    name: "Doc1.docx",
    type: "docx",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    status: "inProgress",
    progress: 80,
  },
  {
    id: 3,
    name: "Tito2.pdf",
    type: "pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    status: "inProgress",
    progress: 50,
  },
  {
    id: 4,
    name: "Tito3.pdf",
    type: "pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    status: "inProgress",
    progress: 90,
  },
  {
    id: 5,
    name: "Doc2.docx",
    type: "docx",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    status: "inProgress",
    progress: 70,
  },
  {
    id: 6,
    name: "Tito4.pdf",
    type: "pdf",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    status: "inProgress",
    progress: 25,
  },
  {
    id: 7,
    name: "Doc3.docx",
    type: "docx",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    status: "inProgress",
    progress: 37,
  },
  {
    id: 8,
    name: "Doc4.docx",
    type: "docx",
    date: "Jan 24, 1999",
    size: "19.00 MB",
    status: "inProgress",
    progress: 63,
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

const InProgressTab = () => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerClassName: "header-spacing",
      cellClassName: "cell-spacing",
      renderCell: (params: any) => {
        if (params.row.type === "pdf" || params.row.type === "docx") {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "10px",
              }}
            >
              <Image
                src={getFileIcon(params.row.type)}
                alt={`${params.row.type} icon`}
                width={24}
                height={24}
              />
              <Typography sx={{ ml: "5px" }}>{params.row.name}</Typography>
            </Box>
          );
        }
      },
    },
    {
      field: "size",
      headerName: "File Size",
      width: 180,
      headerClassName: "header-spacing",
      cellClassName: "cell-spacing",
    },
    {
      field: "action",
      headerName: "",
      width: 600,
      headerClassName: "header-spacing",
      cellClassName: "cell-spacing",
      renderCell: (params: any) => {
        return (
          <Box sx={{ display: "flex" }}>
            <Box sx={{ ml: "140px", width: "50%", alignSelf: "center" }}>
              <Box>
                <LinearProgress variant="determinate" value={params.row.progress} />
              </Box>
            </Box>
            <Button>
              <PauseCircleOutlineIcon />
            </Button>
            <Button>
              <CloseIcon />
            </Button>
          </Box>
        );
      },
    },
  ];

  return <DataGrid rows={initialRows} columns={columns}></DataGrid>;
};

export default InProgressTab;
