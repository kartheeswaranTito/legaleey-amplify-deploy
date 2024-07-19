// components/MyDocuments.tsx

"use client"; // Ensure this component is client-side

import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import InProgress from "@/components/InProgress_Component";
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
// import styles from '../../styles/addNewPage.module.css';

export default function MyDocuments() {
	const [value, setValue] = React.useState("1");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<CommonLayout>
			{/* <Box sx={{ width: "100%", typography: "body1", mt: 2, px: 2, ml: 0 }}> */}
			<Breadcrumbs aria-label='breadcrumb'>
				<Link
					underline='hover'
					sx={{ display: "flex", alignItems: "center" }}
					color='inherit'
					href='my-documents/'
				>
					<HomeIcon
						sx={{ mr: 0.5 }}
						fontSize='inherit'
					/>
				</Link>
				<Link
					underline='hover'
					sx={{ display: "flex", alignItems: "center" }}
					color='inherit'
				>
					My Documents
				</Link>
			</Breadcrumbs>
			<Typography
				variant='h4'
				component='h2'
			>
				My Documents
			</Typography>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
					<TabList
						onChange={handleChange}
						aria-label='Document tabs'
						centered
						textColor='primary'
						indicatorColor='primary'
						variant='scrollable' // Makes tabs scrollable on small screens
						scrollButtons='auto'
					>
						<Tab
							label='VERIFIED'
							value='1'
						/>
						<Tab
							label='UNVERIFIED'
							value='2'
						/>
						<Tab
							label='IN PROGRESS'
							value='3'
						/>
					</TabList>
				</Box>
				<TabPanel value='1'></TabPanel>
				<TabPanel value='2'></TabPanel>
				<TabPanel value='3'>
					<InProgress />
				</TabPanel>
			</TabContext>
			{/* </Box> */}

			<Box sx={{ mt: 20, textAlign: "center" }}>
				<Typography
					variant='h6'
					component='h1'
					gutterBottom
					color=' #323B4A'
				>
					There Are No Verified Documents
				</Typography>

				<Button
					variant='contained'
					size='large'
					startIcon={<Add />}
					sx={{
						// width: '100%',
						// height: '56px',
						// fontSize: '1rem',
						// fontWeight: 'bold',
						// marginLeft:'10%'
						textAlign: "center",
					}}
					onClick={() => {
						document.getElementById("file_upload")?.click();
					}}
				>
					ADD NEW
				</Button>
			</Box>
			<Box sx={{ mt: 5, mb: 5, textAlign: "center" }}>
				<StorageManager
					acceptedFileTypes={["*"]}
					path={({ identityId }) => `protected/${identityId}/`}
					maxFileCount={5}
					isResumable
					components={{
						FilePicker({ onClick }) {
							return (
								<Button
									variant='outlined'
									id='file_upload'
									onClick={onClick}
								>
									Upload Document
								</Button>
							);
						},
					}}
				/>
			</Box>
		</CommonLayout>
	);
}
