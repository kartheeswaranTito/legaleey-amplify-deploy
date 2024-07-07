

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
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import { Add } from "@mui/icons-material";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import '@fontsource/roboto/700.css';
// import styles from '../../styles/addNewPage.module.css';

export default function MyDocuments() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderEmptyState = (message : String) => (
    <Box sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src="./images/docs.png"
        alt="Documents img"
        sx={{
          width: "256.88px",
          height: "272.83px",
          mt: "110px",
         
          mx: "auto",

        }}
      />
      <Typography variant="h5" component="h1" gutterBottom color=" #323B4A"
        sx={{
          color: "#323B4A",
          fontFamily: "Roboto",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "22px",
          letterSpacing: "0.46px",
           mb: 2,
        }}
      >
        {message}
      </Typography>
      {/* <Button
        variant="contained"
        size="large"
        startIcon={<Add />}
        sx={{
          width: "141px",
          height: "42px",
          mt: "16px",
          mx: "auto",
          
          padding: "8px 22px",
          backgroundColor: "#397EF3",
        }}
        onClick={() => {
          document.getElementById("file_upload")?.click();
        }}
      >
        ADD NEW
      </Button> */}

      {/* S3 */}
      <Box sx={{ mt: 5, mb: 5 }}>
        <StorageManager
          acceptedFileTypes={["*"]}
          path={({ identityId }) => `protected/${identityId}/`}
          maxFileCount={5}
          isResumable
          components={{
            FilePicker({ onClick }) {
              return (
                <Button variant="contained" id="file_upload" onClick={onClick} sx={{boxShadow:"none"}}>
                  Upload Document
                </Button>
              );
            },
          }}
        />
      </Box>
    </Box>
  );

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
        <TabPanel value="1">{renderEmptyState("There Are No Verified Documents")}</TabPanel>
        <TabPanel value="2">{renderEmptyState("There Are No Unverified Documents")}</TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </CommonLayout>
  );
}
