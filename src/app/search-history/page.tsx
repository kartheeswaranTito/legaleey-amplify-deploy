// import CommonLayout from "@/components/CommonLayout";
// import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";

// export default function Trash() {
//   return (
//     <CommonLayout>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//           href="search-history/"
//         >
//           <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//         </Link>
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//         >
//           Search History
//         </Link>
//       </Breadcrumbs>
//       <Typography variant="h4" component="h2">
//         Search History
//       </Typography>

//       <Box sx={{ mt: 20, textAlign: "center" }}>
//         <Typography variant="h6" component="h1" gutterBottom color=" #323B4A">
//           There is no search History!
//         </Typography>
//       </Box>
//     </CommonLayout>
//   );
// }



"use client"; // Ensure this component is client-side
import AWS from "aws-sdk";
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
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import { Add } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";

export default function MyDocuments() {
  const [value, setValue] = React.useState("1");
  const [file, setFile] = React.useState<File | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
  });

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    // S3 Bucket Name
    const S3_BUCKET = "lee-bucket-24";
    // S3 Region
    const REGION = "us-east-1";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "AKIATSTFD6LMRCOLGKZC",
      secretAccessKey: "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",
    });

    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      const upload = s3
        .putObject(params)
        .on("httpUploadProgress", (evt) => {
          console.log("Uploading " + parseInt(((evt.loaded * 100) / evt.total).toString()) + "%");
        })
        .promise();

      await upload;
      alert("File uploaded successfully.");
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Error uploading file.");
    }
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
        <TabPanel value="1">
          <Box {...getRootProps()} sx={{ border: "2px dashed grey", p: 2, textAlign: "center" }}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <Typography>Drop the files here ...</Typography>
            ) : (
              <Typography>Drag 'n' drop some files here, or click to select files</Typography>
            )}
          </Box>
          <Box sx={{ mt: 2 }}>
            {file && <Typography>{file.name}</Typography>}
            <Button
              variant="contained"
              size="large"
              startIcon={<Add />}
              sx={{ mt: 2 }}
              onClick={uploadFile}
            >
              Upload
            </Button>
          </Box>
        </TabPanel>
        <TabPanel value="2">
          {/* Content for UNVERIFIED tab */}
        </TabPanel>
        <TabPanel value="3">
          {/* Content for IN PROGRESS tab */}
        </TabPanel>
      </TabContext>
      <Box sx={{ mt: 20, textAlign: "center" }}>
        <Typography variant="h6" component="h1" gutterBottom color=" #323B4A">
          There Are No Verified Documents
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<Add />}
          sx={{
            textAlign: "center",
          }}
        >
          ADD NEW
        </Button>
      </Box>
    </CommonLayout>
  );
}
