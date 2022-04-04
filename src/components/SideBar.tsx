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
	const completedTasks = ctx?.taskList.filter((task) => task.isCompleted);

	return (
		<StyledTasksCompleted>
			<p style={{ display: "inline-block" }}>Tasks Completed</p>
			<span>
				{completedTasks?.length}/{ctx?.taskList.length}
			</span>
		</StyledTasksCompleted>
	);
};

export const Buckets: FC = () => {
	const { bucketList, taskList, selectedBucket, onSetSelectedBucket, clearSelectedBucket } =
		useContext(StoreContext);

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "15px 0 0 0",
					borderBottom: "1px solid rgb(235, 234, 234)",
					alignItems: "center",
				}}
			>
				<h3 style={{ margin: 0, display: "inline-block" }}>Buckets</h3>
				<small>
					<span onClick={clearSelectedBucket} style={{ cursor: "pointer" }}>
						show all
					</span>
				</small>
			</div>
			{bucketList.map((bucket) => {
				const bucketLength = taskList.filter((t) => t.bucket === bucket.id).length;
				const bucketCompleted = taskList.filter(
					(t) => t.bucket === bucket.id && t.isCompleted
				).length;
				return (
					<div
						key={bucket.id}
						onClick={() => onSetSelectedBucket(bucket)}
						style={{
							display: "flex",
							justifyContent: "space-between",
							backgroundColor: `${selectedBucket && selectedBucket.id === bucket.id ? "#ddd" : ""}`,
						}}
					>
						<p style={{ display: "inline-block", margin: "10px 0" }}>
							{bucket.name || "Unbucketed List"}
						</p>
						<p style={{ display: "inline-block", margin: "10px 0" }}>
							{/* {taskList.filter((t) => t.bucket === bucket.id).length || "0"} tasks */}
							{bucketCompleted}/{bucketLength} tasks
						</p>
					</div>
				);
			})}
		</>
	);
};
