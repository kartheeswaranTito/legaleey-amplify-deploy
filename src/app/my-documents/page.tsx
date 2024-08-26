"use client";

import { useState, useEffect } from "react";
import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Tab, Typography, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import VerifiedTab from "./verified-tab/verified";
import UnverifiedTab from "./unverified-tab/unverified";
import InProgressTab from "./In-Progress-tab/inprogress";
import AddIcon from '@mui/icons-material/Add';
import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { edgeServerAppPaths } from "next/dist/build/webpack/plugins/pages-manifest-plugin";

export default function MyDocuments() {
    const [value, setValue] = useState("1");
    const [isNewUser, setIsNewUser] = useState(true);
    const [showStorageManager, setShowStorageManager] = useState(isNewUser);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (isNewUser && newValue === "3") return;
        setValue(newValue);
    };

    const handleDragEnter = (event: DragEvent) => {
        event.preventDefault();
        setShowStorageManager(true);
    };

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
    };

    useEffect(() => {
        window.addEventListener("dragenter", handleDragEnter);
        window.addEventListener("dragover", handleDragOver);

        return () => {
            window.removeEventListener("dragenter", handleDragEnter);
            window.removeEventListener("dragover", handleDragOver);
        };
    }, []);

    return (
        <CommonLayout>
            <Breadcrumbs aria-label='breadcrumb'>
                <Link
                    underline='hover'
                    sx={{ display: "flex", alignItems: "center" }}
                    color='inherit'
                    href='my-documents/'
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
                <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit">
                    My Documents
                </Link>
            </Breadcrumbs>

            <Typography variant="h4" component="h2" className="sub-heading">
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
                        <Tab
                            label="IN PROGRESS"
                            value="3"
                            disabled={isNewUser} 
                        />
                    </TabList>
                </Box>

                {isNewUser && value === "1" ? (
                    <Box sx={{ textAlign: "center", mt: 5 }}>
                        <Box
                            component="img"
                            src="./images/docs.png"
                            alt="Documents img"
                            sx={{
                                width: "256.88px",
                                height: "272.83px",
                                mx: "auto",
                                mt: "110px",
                            }}
                        />
                        <Typography variant="h5" component="h1" gutterBottom color="#323B4A"
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
                            There Are No Verified Documents
                        </Typography>
                    </Box>
                ) : isNewUser && value === "2" ? (
                    <Box sx={{ textAlign: "center", mt: 5 }}>
                        <Box
                            component="img"
                            src="./images/docs.png"
                            alt="Documents img"
                            sx={{
                                width: "256.88px",
                                height: "272.83px",
                                mx: "auto",
                                mt: "110px",
                            }}
                        />
                        <Typography variant="h5" component="h1" gutterBottom color="#323B4A"
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
                            There Are No UnVerified Documents
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <TabPanel value="1">
                            <VerifiedTab />
                        </TabPanel>
                        <TabPanel value="2">
                            <UnverifiedTab />
                        </TabPanel>
                        <TabPanel value="3">
                            <InProgressTab />
                        </TabPanel>
                    </>
                )}
            </TabContext>

            {showStorageManager && (
                <Box sx={{ padding: 5, mt: -5 }}>
                    <StorageManager
                        acceptedFileTypes={["*"]}
                        path='public/'
                        maxFileCount={1}
                        isResumable
                        components={{
                            FilePicker({ onClick }) {
                                return (
                                    <Button
                                        id='file_upload'
                                        variant='contained'
                                        onClick={onClick}
                                    >
                                        Upload File
                                    </Button>
                                );
                            },
                        }}
                    />
                </Box>
            )}
        </CommonLayout>
    );
}
