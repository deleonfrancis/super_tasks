import { Button as MButton } from "@mui/material";
import React, { FC } from "react";
import { StoreContext } from "../store/context";
import { Task } from "./NewTask";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

export interface TaskDetailsProps {
	task: Task | null;
}

const Button = styled(MButton)`
	width: 100%;
	background-color: #ed6464 !important;
`;

export const TaskDetails: FC = () => {
	const { selectedTask, onDeleteTask, onCloseTaskDetails } = React.useContext(StoreContext);

	if (!selectedTask) {
		return null;
	}

	const handleDeleteTask = (): void => {
		onDeleteTask(selectedTask);
	};

	const handleCloseTaskDetails = (): void => {
		onCloseTaskDetails();
	};

	return (
		<div style={{ flex: 1 }}>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<span>
					<h1 style={{ display: "inline-block" }}>{selectedTask.title}</h1>
					<span style={{ display: "inline-block", marginLeft: "10px", color: "#bbb" }}>
						<i>{selectedTask.isCompleted ? "Completed" : "Pending"}</i>
					</span>
				</span>
			</div>
			<p>{selectedTask.details}</p>
			<div style={{ textAlign: "center" }}>
				<Button
					variant="contained"
					startIcon={<DeleteIcon />}
					style={{ textAlign: "center" }}
					onClick={handleDeleteTask}
				>
					Delete
				</Button>
				<p></p>
				<Button onClick={handleCloseTaskDetails}>Close</Button>
			</div>
		</div>
	);
};
