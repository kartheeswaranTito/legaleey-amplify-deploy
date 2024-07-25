import * as React from "react";
import { useState } from "react";
import { Drawer, Button } from "@mui/material";
import { bool } from "aws-sdk/clients/signer";

function SelectColumn() {
	const [selectColumnOpen, setSelectColumnOpen] = useState(false);

	function handleSelectColumnChange(nowOpen: boolean) {
		setSelectColumnOpen(nowOpen);
	}

	return (
		<>
			<Button onClick={() => handleSelectColumnChange(true)}>
				Open Select Column
			</Button>
			<Drawer
				open={selectColumnOpen}
				onClose={() => handleSelectColumnChange(false)}
			></Drawer>
		</>
	);
}

export default SelectColumn;
