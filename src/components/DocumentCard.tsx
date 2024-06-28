// components/DocumentCard.tsx
"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	Link,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
type DocumentCardProps = {
	title: string;
	description: string;
	buttonText?: string;
	linkText?: string;
	icon: React.ReactNode;
	buttonLink?: string;
	linkHref?: string;
};

const DocumentCard: React.FC<DocumentCardProps> = ({
	title,
	description,
	buttonText,
	linkText,
	icon,
	buttonLink,
	linkHref,
}) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleNavigation = (path: string) => {
		router.push(path);
	};
	return (
		<Card
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: 2,
				borderRadius: "8px",
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				{icon}
				<Box sx={{ marginLeft: 2 }}>
					<Typography
						variant='h6'
						component='div'
					>
						{title}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
					>
						{description}
					</Typography>
				</Box>
			</Box>
			{buttonText && buttonLink && (
				<Button
					variant='contained'
					color='primary'
					startIcon={<FileUploadOutlinedIcon />}
					href={buttonLink}
					onClick={() => handleNavigation("/my-documents")}
				>
					{buttonText}
				</Button>
			)}
			{linkText && linkHref && (
				<Link
					href={linkHref}
					underline='none'
					sx={{ display: "flex", alignItems: "center", color: "primary.main" }}
				>
					{linkText}{" "}
					<ArrowForwardIosIcon sx={{ fontSize: 16, marginLeft: 1 }} />
				</Link>
			)}
		</Card>
	);
};

export default DocumentCard;
