import React from 'react';
import { Bucket } from '../components/Bucket';
import { Task } from '../components/NewTask';

interface AppContextInterface {
    taskList: Task[];
    bucketList: Bucket[];
    selectedTask: Task | null;
    onDeleteTask: (task: Task) => void;
}

export const StoreContext = React.createContext<AppContextInterface>({} as AppContextInterface);
export const StoreProvider = StoreContext.Provider;