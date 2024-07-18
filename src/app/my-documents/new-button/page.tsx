"use client"; 
import * as React from "react";
import {
	Box,
	Button,
	Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

export default function NewButton() {
	return (
		<>
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
            </>
	);
}
