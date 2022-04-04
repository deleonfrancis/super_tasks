import { Checkbox } from "@mui/material";
import React, { FC } from "react";
import styled from "styled-components";
import { StoreContext } from "../store/context";
import { bucketList } from "./Bucket";
import { ModalNewTask } from "./ModalNewTask";
import { Task } from "./NewTask";

interface TaskListProps {
	tasks: Task[];
	bucket: string;
	onSelectedTask: (task: Task) => void;
	onCompletedTask: (task: Task) => void;
}

enum PRIORITY {
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
	NONE = 0,
}

interface TaskListItemProps {
	task: Task;
	onClick: (task: Task) => void;
	onDelete: (task: Task) => void;
	onCompleted: (task: Task) => void;
}

const StyledPrioritySection = styled.div`
	h4 {
		margin-bottom: 0;
	}
`;
const StyledDetailPreview = styled.p`
	text-overflow: ellipsis;
	max-width: 360px;
	overflow: hidden;
	white-space: nowrap;
	color: #8c8c8c;
`;
const StyledTaskListItem = styled.div<{ isCompleted: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		margin: 5px 0;
		text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
	}
`;

const PrioritySection: FC<{ section: string }> = (props) => {
	const { section, children } = props;
	return (
		<StyledPrioritySection>
			<h4>{section}</h4>
			{children}
		</StyledPrioritySection>
	);
};

const TaskListItem: FC<TaskListItemProps> = (prop) => {
	const { task, onClick, onDelete, onCompleted } = prop;
	return (
		<StyledTaskListItem isCompleted={task.isCompleted}>
			<div style={{ margin: "10px 0", cursor: "pointer" }} onClick={() => onClick(task)}>
				<p>{task.title}</p>
				<StyledDetailPreview>{task.details}</StyledDetailPreview>
			</div>
			<div>
				<Checkbox
					checked={task.isCompleted}
					onChange={() => onCompleted(task)}
					inputProps={{ "aria-label": "controlled" }}
				/>
			</div>
		</StyledTaskListItem>
	);
};

export const TaskList: FC<TaskListProps> = (props) => {
	const { tasks, onSelectedTask, onCompletedTask, bucket } = props;
	const { taskList, selectedBucket, onDeleteTask } = React.useContext(StoreContext);
	const [bucketTitle, setBucketTitle] = React.useState<string>("");

	React.useEffect(() => {
		setBucketTitle(bucketList.find((b) => b.id === bucket)?.name || "");
	}, []);

	const handleTaskItem = (task: Task) => {
		onSelectedTask(task);
	};

	const handleDeleteItem = (task: Task) => {
		// setTaskList(taskList.filter((t) => t.id !== task.id));
		onDeleteTask(task);
	};

	const handleCompletedTask = (task: Task) => {
		//This ideally will update the task in the database
		// setTaskList(
		// 	taskList.map((t) => {
		// 		if (t.id === task.id) {
		// 			t.isCompleted = !t.isCompleted;
		// 			t.completedOn = moment().format();
		// 		}
		// 		return t;
		// 	})
		// );
		onCompletedTask(task);
	};

	const listTaskItems = (priority: number): React.ReactNode[] | React.ReactNode => {
		const t = taskList
			.filter((task) => task.priority === priority)
			.map((task) => {
				if (!selectedBucket) {
					return (
						<TaskListItem
							key={task.id}
							task={task}
							onClick={handleTaskItem}
							onDelete={handleDeleteItem}
							onCompleted={handleCompletedTask}
						/>
					);
				}
				return (
					task.bucket === selectedBucket.id && (
						<TaskListItem
							key={task.id}
							task={task}
							onClick={handleTaskItem}
							onDelete={handleDeleteItem}
							onCompleted={handleCompletedTask}
						/>
					)
				);
			});
		return t.length > 0 ? t : <p>No tasks</p>;
	};

	if (taskList.length === 0) {
		return <p>No tasks to display</p>;
	}

	return (
		<div style={{ width: "100%" }}>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h1 style={{ borderBottom: "1px solid #ebeaea", display: "inline-block", width: "85%" }}>
					{selectedBucket?.name || "All Buckets"}
				</h1>
				<ModalNewTask />
			</div>
			<PrioritySection section="High Priority">{listTaskItems(PRIORITY.HIGH)}</PrioritySection>
			<PrioritySection section="Medium Priority">{listTaskItems(PRIORITY.MEDIUM)}</PrioritySection>
			<PrioritySection section="Low Priority">{listTaskItems(PRIORITY.LOW)}</PrioritySection>
			<PrioritySection section="No Priority">{listTaskItems(PRIORITY.NONE)}</PrioritySection>
		</div>
	);
};
