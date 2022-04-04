import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export type Task = {
	id: string;
	title: string;
	details?: string;
	priority: number;
	bucket?: string | null;
	dueDate?: string | null;
	dateCreated?: string;
	isCompleted: boolean;
	completedOn: string | null;
};

//Task
/**
 * title: string
 * details: string
 * priority: number
 * bucket: string
 * dueDate: string
 * isCompleted: boolean
 */

export const NewTask: React.FC<Task> = () => {
	const [taskTitle, setTaskTitle] = useState<string>();
	const [taskDetails, setTaskDetails] = useState<string>();
	//   const [dateAndTime, setDateAndTime] = useState<string>("")

	const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(event.target.value);
	};
	const handleChangeDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTaskDetails(event.target.value);
	};

	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					id="standard-textarea"
					label="Title"
					placeholder="Type task title"
					multiline
					variant="standard"
					value={taskTitle}
					onChange={handleChangeTitle}
				/>
			</div>
			<div>
				<TextField
					id="standard-multiline-static"
					label="Details"
					multiline
					rows={4}
					defaultValue=""
					variant="standard"
					value={taskDetails}
					onChange={handleChangeDetails}
				/>
			</div>
		</Box>
	);
};
