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
	const { selectedTask: task } = React.useContext(StoreContext);
	if (!task) {
		return null;
	}
	return (
		<div style={{ flex: 1 }}>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<span>
					<h1 style={{ display: "inline-block" }}>{task.title}</h1>
					<span style={{ display: "inline-block", marginLeft: "10px", color: "#bbb" }}>
						<i>{task.isCompleted ? "Completed" : "Pending"}</i>
					</span>
				</span>
			</div>
			<p>{task.details}</p>
			<div style={{ textAlign: "center" }}>
				<Button variant="contained" startIcon={<DeleteIcon />} style={{ textAlign: "center" }}>
					Delete
				</Button>
			</div>
		</div>
	);
};
