import React from "react";

export type Bucket = {
	id: string;
	name: string;
	details?: string;
	dateCreated?: string;
	isCompleted: boolean;
	completedOn: string | null;
};

export const bucketList: Bucket[] = [
	{
		id: "vacation-id",
		name: "Vacation",
		details: "Bucket 1 details",
		dateCreated: "2020-01-01",
		isCompleted: false,
		completedOn: null,
	},
	{
		id: "p-team",
		name: "Praise Team",
		details: "Bucket 2 details",
		dateCreated: "2020-01-01",
		isCompleted: false,
		completedOn: null,
	},
	{
		id: "initial",
		name: "No bucket Tasks",
		details: "Bucket 2 details",
		dateCreated: "2020-01-01",
		isCompleted: false,
		completedOn: null,
	},
];
