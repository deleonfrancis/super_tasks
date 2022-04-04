import React from "react";
import styled from "styled-components";
import moment from "moment";

import { SearchBar } from "./components/SearchBar";
import { TaskList } from "./components/TaskList";
import { Task } from "./components/NewTask";
import { TaskDetails } from "./components/TaskDetails";
import { StoreProvider } from "./store/context";
import { Buckets, TasksCompleted } from "./components/SideBar";
import { bucketList } from "./components/Bucket";
import { ModalNewTask } from "./components/ModalNewTask";

export const list: Task[] = [
	{
		id: "1",
		title: "Low priority task title",
		details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dolore ipsum harum, unde molestias accusantium, nemo obcaecati earum quam ad porro neque nulla odit officia ab cumque adipisci commodi alias.
    Nulla culpa ad pariatur reiciendis qui doloribus, sequi quas excepturi dolorum error libero inventore. Odio, praesentium? Esse nemo recusandae, rerum, facilis quasi repellat eos nihil deleniti quibusdam necessitatibus, ea odit?`,
		priority: 1,
		bucket: "vacation-id",
		dueDate: "2020-01-01",
		dateCreated: "2020-01-01",
		isCompleted: false,
		completedOn: null,
	},
	{
		id: "2",
		title: "Medium priority task title",
		details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci impedit expedita temporibus eligendi omnis. Doloremque obcaecati vero corrupti dicta accusantium ab quos possimus ducimus commodi qui. Non, delectus aspernatur?`,
		priority: 2,
		bucket: "p-team",
		dueDate: "2020-01-01",
		dateCreated: "2020-01-01",
		isCompleted: false,
		completedOn: null,
	},
	{
		id: "3",
		title: "High priority task title",
		details: "Task 3 details",
		priority: 3,
		bucket: "vacation-id",
		dueDate: "2020-01-01",
		dateCreated: "2020-01-01",
		isCompleted: false,
		completedOn: null,
	},
	{
		id: "4",
		title: "No priority task title",
		details: "Task 4 details",
		priority: 0,
		bucket: "initial",
		dueDate: null,
		dateCreated: "2020-01-01",
		isCompleted: false,
		completedOn: null,
	},
];

const StyledApp = styled.div<{ isDetailsOpen: boolean }>`
	font-family: "Noto Sans", sans-serif;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: 20px;
	min-height: 300px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
	border-radius: 5px;
	margin: 50px auto;
	width: 80%;
`;

const StyledSearchBar = styled.div`
	display: flex;
	flex: 1;
	background-color: #e7725a;
	width: 100%;
	border-radius: 5px 5px 0 0;
`;

const Content = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: center;
	align-items: stretch;
	min-height: 300px;
`;

const FirstColumn = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	min-height: 300px;
	width: 300px;
	background-color: #f5f5f5;
	border-radius: 0px 0px 0px 5px;
`;

const SecondColumn = styled.div`
	display: flex;
	padding: 10px;
	flex: 2;
	min-height: 300px;
	background-color: #fff;
	border-radius: 0px 5px 5px 0px;
`;

const ThirdColumn = styled.div`
	display: flex;
	flex: 3;
	padding: 10px;
	min-height: 300px;
	border-left: 1px solid #eeeeee;
	border-radius: 0px 0px 5px 0px;
`;

function App(): JSX.Element {
	const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);
	const [taskList, setTaskList] = React.useState<Task[]>(list);

	const handleSelectedTask = (task: Task): void => {
		setSelectedTask(task);
	};

	const handleCompletedTask = (task: Task): void => {
		setTaskList(
			taskList.map((t) => {
				if (t.id === task.id) {
					t.isCompleted = !t.isCompleted;
					t.completedOn = moment().format();
				}
				return t;
			})
		);
	};

	const value = {
		taskList: list,
		bucketList: bucketList,
		selectedTask,
		onDeleteTask: (task: Task) => {},
	};

	return (
		<StoreProvider value={value}>
			<StyledApp isDetailsOpen={!!selectedTask}>
				<StyledSearchBar>
					<SearchBar />
				</StyledSearchBar>
				<Content>
					<FirstColumn>
						<TasksCompleted />
						<Buckets />
					</FirstColumn>
					<SecondColumn>
						<TaskList
							tasks={list}
							bucket="vacation-id"
							onSelectedTask={handleSelectedTask}
							onCompletedTask={handleCompletedTask}
						/>
					</SecondColumn>
					<ModalNewTask />
					{selectedTask && (
						<ThirdColumn>
							<TaskDetails />
						</ThirdColumn>
					)}
				</Content>
			</StyledApp>
		</StoreProvider>
	);
}

export default App;
