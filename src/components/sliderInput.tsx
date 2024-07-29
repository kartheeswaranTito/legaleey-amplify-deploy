import * as React from "react";
import { useState } from "react";
import { Box, Slider, TextField, Typography } from "@mui/material";
import { SliderField } from "@aws-amplify/ui-react";

function SliderInput({ title, minValue, maxValue }) {
	const [sliderValue, setSliderValue] = React.useState<number[]>([
		minValue,
		maxValue,
	]);
	const [sliderInput1, setSliderInput1] = useState(sliderValue[0]);
	const [sliderInput2, setSliderInput2] = useState(sliderValue[1]);
	function handleSliderValueChange(event: Event, newValue: number | number[]) {
		const _value = newValue as Array<number>;
		setSliderValue(newValue as number[]);
		setSliderInput1(_value[0]);
		setSliderInput2(_value[1]);
	}
	return (
		<Box
			sx={{
				marginBottom: "10px",
			}}
		>
			<Typography
				sx={{
					color: "#000",
					marginBottom: "8px",
					fontWeight: " Bold",
					fontSize: "18px",
				}}
			>
				{title}
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<TextField
					sx={{ width: "100px" }}
					size='small'
					value={sliderInput1}
				/>
				<TextField
					sx={{ width: "100px" }}
					size='small'
					value={sliderInput2}
				/>
			</Box>

			<Slider
				value={sliderValue}
				valueLabelDisplay='auto'
				onChange={handleSliderValueChange}
				min={minValue}
				max={maxValue}
			/>
		</Box>
	);
}

export default SliderInput;
