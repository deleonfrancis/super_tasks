import React, { FC, useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../store/context";

const StyledTasksCompleted = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-height: 50px;
	align-items: center;
`;

export const TasksCompleted: FC = () => {
	const ctx = useContext(StoreContext);
	const uncompletedTasks = ctx?.taskList.filter((task) => !task.isCompleted);

	return (
		<StyledTasksCompleted>
			<p style={{ display: "inline-block" }}>Tasks Completed</p>
			<span>
				{uncompletedTasks?.length}/{ctx?.taskList.length}
			</span>
		</StyledTasksCompleted>
	);
};

export const Buckets: FC = () => {
	const { bucketList, taskList } = useContext(StoreContext);

	return (
		<>
			<h4 style={{ marginBottom: 0 }}>Buckets</h4>
			{bucketList.map((bucket) => {
				const bucketLength = taskList.filter((t) => t.bucket === bucket.id).length;
				const bucketCompleted = taskList.filter(
					(t) => t.bucket === bucket.id && t.isCompleted
				).length;
				return (
					<div key={bucket.id} style={{ display: "flex", justifyContent: "space-between" }}>
						<p style={{ display: "inline-block", marginBottom: 0 }}>
							{bucket.name || "Unbucketed List"}
						</p>
						<p style={{ display: "inline-block", marginBottom: 0 }}>
							{/* {taskList.filter((t) => t.bucket === bucket.id).length || "0"} tasks */}
							{bucketCompleted}/{bucketLength} tasks
						</p>
					</div>
				);
			})}
		</>
	);
};
