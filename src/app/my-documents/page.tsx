// "use client";

// import CommonLayout from "@/components/CommonLayout";
// import * as React from "react";
// import { Box, Breadcrumbs, Link, Tab, Typography, Button } from "@mui/material";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
// import HomeIcon from "@mui/icons-material/Home";
// import { Add } from "@mui/icons-material";
// import VerifiedTab from "./verified-tab/verified";
// import UnverifiedTab from "./unverified-tab/unverified";
// import InProgressTab from "./In-Progress-tab/inprogress";
// import { StorageManager } from "@aws-amplify/ui-react-storage";
// import "@aws-amplify/ui-react/styles.css";

// // import styles from '../../styles/addNewPage.module.css';

// export default function MyDocuments() {
// 	const [value, setValue] = React.useState("1");

// 	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
// 		setValue(newValue);
// 	};

// 	return (
// 		<CommonLayout>
// 			{/* <Box sx={{ width: "100%", typography: "body1", mt: 2, px: 2, ml: 0 }}> */}
// 			<Breadcrumbs aria-label='breadcrumb'>
// 				<Link
// 					underline='hover'
// 					sx={{ display: "flex", alignItems: "center" }}
// 					color='inherit'
// 					href='my-documents/'
// 				>
// 					<HomeIcon
// 						sx={{ mr: 0.5 }}
// 						fontSize='inherit'
// 					/>
// 				</Link>
// 				<Link
// 					underline='hover'
// 					sx={{ display: "flex", alignItems: "center" }}
// 					color='inherit'
// 				>
// 					My Documents
// 				</Link>
// 			</Breadcrumbs>
// 			<Typography
// 				variant='h4'
// 				component='h2'
// 				className='sub-heading'
// 			>
// 				My Documents
// 			</Typography>
// 			<TabContext value={value}>
// 				<Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
// 					<TabList
// 						onChange={handleChange}
// 						aria-label='Document tabs'
// 						textColor='primary'
// 						indicatorColor='primary'
// 						variant='scrollable' // Makes tabs scrollable on small screens
// 						scrollButtons='auto'
// 					>
// 						<Tab
// 							label='VERIFIED'
// 							value='1'
// 						/>
// 						<Tab
// 							label='UNVERIFIED'
// 							value='2'
// 						/>
// 						<Tab
// 							label='IN PROGRESS'
// 							value='3'
// 						/>
// 					</TabList>
// 				</Box>
// 				<TabPanel value='1'>
// 					<VerifiedTab />
// 				</TabPanel>
// 				<TabPanel value='2'>
// 					<UnverifiedTab />
// 				</TabPanel>
// 				<TabPanel value='3'>
// 					<InProgressTab />
// 				</TabPanel>
// 			</TabContext>
// 			<Box sx={{ padding: 5 }}>
// 				<StorageManager
// 					acceptedFileTypes={["*"]}
// 					path='public/'
// 					maxFileCount={1}
// 					isResumable
// 					components={{
// 						FilePicker({ onClick }) {
// 							return (
// 								<Button
// 									id='file_upload'
// 									variant='contained'
// 									onClick={onClick}
// 								>
// 									Upload File
// 								</Button>
// 							);
// 						},
// 					}}
// 				/>
// 			</Box>
// 		</CommonLayout>
// 	);
// }





// "use client";

// import CommonLayout from "@/components/CommonLayout";
// import * as React from "react";
// import { Box, Breadcrumbs, Link, Tab, Typography, Button } from "@mui/material";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
// import HomeIcon from "@mui/icons-material/Home";
// import VerifiedTab from "./verified-tab/verified";
// import UnverifiedTab from "./unverified-tab/unverified";
// import InProgressTab from "./In-Progress-tab/inprogress";
// import { StorageManager } from "@aws-amplify/ui-react-storage";
// import "@aws-amplify/ui-react/styles.css";

// export default function MyDocuments() {
//     const [value, setValue] = React.useState("1");
//     const [showStorageManager, setShowStorageManager] = React.useState(false);

//     const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//         setValue(newValue);
//     };

//     const handleDrop = (event: React.DragEvent) => {
//         event.preventDefault();
//         setShowStorageManager(true);
//     };

//     const handleDragOver = (event: React.DragEvent) => {
//         event.preventDefault();
//     };

//     return (
//         <CommonLayout>
//             <Breadcrumbs aria-label='breadcrumb'>
//                 <Link
//                     underline='hover'
//                     sx={{ display: "flex", alignItems: "center" }}
//                     color='inherit'
//                     href='my-documents/'
//                 >
//                     <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
//                 </Link>
//                 <Link
//                     underline='hover'
//                     sx={{ display: "flex", alignItems: "center" }}
//                     color='inherit'
//                 >
//                     My Documents
//                 </Link>
//             </Breadcrumbs>
//             <Typography variant='h4' component='h2' className='sub-heading'>
//                 My Documents
//             </Typography>
//             <TabContext value={value}>
//                 <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
//                     <TabList
//                         onChange={handleChange}
//                         aria-label='Document tabs'
//                         textColor='primary'
//                         indicatorColor='primary'
//                         variant='scrollable'
//                         scrollButtons='auto'
//                     >
//                         <Tab label='VERIFIED' value='1' />
//                         <Tab label='UNVERIFIED' value='2' />
//                         <Tab label='IN PROGRESS' value='3' />
//                     </TabList>
//                 </Box>
//                 <TabPanel value='1'>
//                     <VerifiedTab />
//                 </TabPanel>
//                 <TabPanel value='2'>
//                     <UnverifiedTab />
//                 </TabPanel>
//                 <TabPanel value='3'>
//                     <InProgressTab />
//                 </TabPanel>
//             </TabContext>
//             <Box
//                 sx={{ padding: 5}}
//                 onDrop={handleDrop}
//                 onDragOver={handleDragOver}
//             >
//                 {showStorageManager && (
//                     <StorageManager
//                         acceptedFileTypes={["*"]}
//                         path='public/'
//                         maxFileCount={1}
//                         isResumable
//                         components={{
//                             FilePicker({ onClick }) {
//                                 return (
//                                     <Button
//                                         id='file_upload'
//                                         variant='contained'
//                                         onClick={onClick}
//                                     >
//                                         Upload File
//                                     </Button>
//                                 );
//                             },
//                         }}
//                     />
//                 )}
//             </Box>
//         </CommonLayout>
//     );
// }

"use client";

import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import { Box, Breadcrumbs, Link, Tab, Typography, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import VerifiedTab from "./verified-tab/verified";
import UnverifiedTab from "./unverified-tab/unverified";
import InProgressTab from "./In-Progress-tab/inprogress";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

export default function MyDocuments() {
    const [value, setValue] = React.useState("1");
    const [showStorageManager, setShowStorageManager] = React.useState(false);

    const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
        setValue(newValue);
    };

    const handleDrop = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShowStorageManager(true);
    };

    const handleDragOver = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    React.useEffect(() => {
        window.addEventListener("drop", handleDrop);
        window.addEventListener("dragover", handleDragOver);

        return () => {
            window.removeEventListener("drop", handleDrop);
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
                    <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                </Link>
                <Link
                    underline='hover'
                    sx={{ display: "flex", alignItems: "center" }}
                    color='inherit'
                >
                    My Documents
                </Link>
            </Breadcrumbs>
            <Typography variant='h4' component='h2' className='sub-heading'>
                My Documents
            </Typography>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
                    <TabList
                        onChange={handleChange}
                        aria-label='Document tabs'
                        textColor='primary'
                        indicatorColor='primary'
                        variant='scrollable'
                        scrollButtons='auto'
                    >
                        <Tab label='VERIFIED' value='1' />
                        <Tab label='UNVERIFIED' value='2' />
                        <Tab label='IN PROGRESS' value='3' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <VerifiedTab />
                </TabPanel>
                <TabPanel value='2'>
                    <UnverifiedTab />
                </TabPanel>
                <TabPanel value='3'>
                    <InProgressTab />
                </TabPanel>
            </TabContext>
            <Box sx={{ padding: 5 }}>
                {showStorageManager && (
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
                )}
            </Box>
        </CommonLayout>
    );
}
