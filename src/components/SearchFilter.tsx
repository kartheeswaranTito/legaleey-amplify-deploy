import * as React from "react";
import { useState } from "react";

import {
	Button,
	Box,
	Typography,
	IconButton,
	InputLabel,
	FormControl,
	MenuItem,
	Drawer,
	Slider,
	TextField,
} from "@mui/material";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import SliderInput from "./sliderInput";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { title } from "process";

interface SearchFilerProps {
	onSearchFilterChange: Function;
	openFilter: boolean;
}

const SearchFilter: React.FC<SearchFilerProps> = ({
	onSearchFilterChange,
	openFilter,
}) => {
	const searchFilterWidth = 300;

	const [select1Value, setSelect1Value] = useState("");
	const [select2Value, setSelect2Value] = useState("");
	const [select3Value, setSelect3Value] = useState("");
	const [select4Value, setSelect4Value] = useState("");
	const [select5Value, setSelect5Value] = useState("");
	const [slider1Value, setSlider1Value] = React.useState<number[]>([
		1900, 2024,
	]);

	function handleSelect1Change(event: SelectChangeEvent) {
		setSelect1Value(event.target.value as string);
	}
	function handleSelect2Change(event: SelectChangeEvent) {
		setSelect2Value(event.target.value as string);
	}
	function handleSelect3Change(event: SelectChangeEvent) {
		setSelect3Value(event.target.value as string);
	}
	function handleSelect4Change(event: SelectChangeEvent) {
		setSelect4Value(event.target.value as string);
	}
	function handleSelect5Change(event: SelectChangeEvent) {
		setSelect5Value(event.target.value as string);
	}

	return (
		<>
			<Drawer
				sx={{
					width: searchFilterWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: searchFilterWidth,
						boxSizing: "border-box",
						marginTop: "64px",
					},
				}}
				variant='persistent'
				anchor='left'
				open={openFilter}
			>
				<Box
					sx={{
						backgroundColor: "#eee",
						padding: "10px",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<FilterAltIcon sx={{ paddingRight: "5px" }} />
						<Typography>Filters</Typography>
					</Box>
					<IconButton onClick={() => onSearchFilterChange(false)}>
						<FirstPageIcon />
					</IconButton>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						padding: "20px",
					}}
				>
					<FormControl>
						<InputLabel id='select1Lable'>File Name</InputLabel>
						<Select
							sx={{ height: "45px", marginBottom: "20px" }}
							id='select1'
							labelId='select1Lable'
							value={select1Value}
							onChange={handleSelect1Change}
							label='File Name'
						>
							<MenuItem value={"Temp_1"}>Temp_1</MenuItem>
							<MenuItem value={"Temp_2"}>Temp_2</MenuItem>
							<MenuItem value={"Temp_3"}>Temp_3</MenuItem>
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel id='select2Lable'>Party</InputLabel>
						<Select
							sx={{
								height: "45px",
								marginBottom: "20px",
							}}
							id='select2'
							labelId='select2Lable'
							value={select2Value}
							onChange={handleSelect2Change}
							label='Party'
						>
							<MenuItem value={"Temp_1"}>Temp_1</MenuItem>
							<MenuItem value={"Temp_2"}>Temp_2</MenuItem>
							<MenuItem value={"Temp_3"}>Temp_3</MenuItem>
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel id='select3Lable'>People</InputLabel>
						<Select
							sx={{ height: "45px" }}
							id='select3'
							labelId='select3Lable'
							value={select3Value}
							onChange={handleSelect3Change}
							label='People'
						>
							<MenuItem value={"Temp_1"}>Temp_1</MenuItem>
							<MenuItem value={"Temp_2"}>Temp_2</MenuItem>
							<MenuItem value={"Temp_3"}>Temp_3</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<hr style={{ width: "90%", alignSelf: "center" }} />
				<Box
					sx={{
						padding: "25px",
					}}
				>
					<SliderInput
						title='Year'
						minValue={1900}
						maxValue={2024}
					/>
					<SliderInput
						title='Amount'
						minValue={10}
						maxValue={10000}
					/>
					<SliderInput
						title='Percentage'
						minValue={1}
						maxValue={100}
					/>
				</Box>
				<hr style={{ width: "90%", alignSelf: "center" }} />
				<Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
					<Typography
						sx={{
							color: "#000",
							marginBottom: "8px",
							fontWeight: " Bold",
							fontSize: "18px",
						}}
					>
						Country
					</Typography>
					<FormControl>
						<InputLabel id='select4Lable'>Country</InputLabel>
						<Select
							sx={{
								height: "45px",
								marginBottom: "20px",
							}}
							id='select4'
							labelId='select4Lable'
							value={select4Value}
							onChange={handleSelect4Change}
							label='Country'
						>
							<MenuItem value={"Temp_1"}>Temp_1</MenuItem>
							<MenuItem value={"Temp_2"}>Temp_2</MenuItem>
							<MenuItem value={"Temp_3"}>Temp_3</MenuItem>
						</Select>
					</FormControl>
					<Typography
						sx={{
							color: "#000",
							marginBottom: "8px",
							fontWeight: " Bold",
							fontSize: "18px",
						}}
					>
						State
					</Typography>
					<FormControl>
						<InputLabel id='select5Lable'>State</InputLabel>
						<Select
							sx={{
								height: "45px",
								marginBottom: "20px",
							}}
							id='select5'
							labelId='select5Lable'
							value={select5Value}
							onChange={handleSelect5Change}
							label='State'
						>
							<MenuItem value={"Temp_1"}>Temp_1</MenuItem>
							<MenuItem value={"Temp_2"}>Temp_2</MenuItem>
							<MenuItem value={"Temp_3"}>Temp_3</MenuItem>
						</Select>
					</FormControl>
					<Button
						variant='contained'
						sx={{ marginTop: "15px" }}
					>
						{" "}
						Apply
					</Button>
				</Box>
			</Drawer>
		</>
	);
};

export default SearchFilter;
