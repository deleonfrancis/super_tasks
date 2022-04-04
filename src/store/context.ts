import React from 'react';
import { Bucket } from '../components/Bucket';
import { Task } from '../components/NewTask';

interface AppContextInterface {
    taskList: Task[];
    bucketList: Bucket[];
    selectedTask: Task | null;
    selectedBucket: Bucket | null;
    clearSelectedBucket: () => void;
    onSetSelectedBucket: (bucket: Bucket) => void;
    onDeleteTask: (task: Task) => void;
    onAddTask: (task: Task) => void;
    onUpdateTask: (task: Task) => void;
    onCloseTaskDetails: () => void;
}

export const StoreContext = React.createContext<AppContextInterface>({} as AppContextInterface);
export const StoreProvider = StoreContext.Provider;