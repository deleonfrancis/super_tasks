import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { StoreContext } from "../store/context";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from "moment";

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
export interface NewTaskProps {
  handleSubmit: () => void;
  handleCancel: () => void;
  handleClose: () => void;
}

export const NewTask: React.FC<NewTaskProps> = (props) => {
  const { bucketList } = useContext(StoreContext);

  const { handleSubmit, handleCancel, handleClose } = props;

  const [newTaskTitle, setNewTaskTitle] = useState<string>();
  const [newTaskDetails, setNewTaskDetails] = useState<string>();
  const [newTaskPriority, setNewTaskPriority] = useState<string>();
  const [newTaskBucket, setNewTaskBucket] = useState<string>();
  const [newTaskDue, setNewTaskDue] = React.useState<Date | null>(
    new Date(moment().format())
  );

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  };
  const handleChangeDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskDetails(event.target.value);
  };

  const handleChangePriority = (event: SelectChangeEvent) => {
    setNewTaskPriority(event.target.value);
  };

  const handleChangeBucket = (event: SelectChangeEvent) => {
    setNewTaskBucket(event.target.value);
    console.log(newTaskBucket);
  };

  const handleChangeDue = (newValue: Date | null) => {
    setNewTaskDue(newValue);
  };

  // const openCancelDialogOrExit = (taskTitle, taskDetails) => {
  //   if (taskTitle || taskDetails) {
  //     // open confirm modal
  //     console.log("open confirm dialog");
  //   }
  //   // exit the new task modal
  //   else console.log("exit modal");
  //   // handleClose();
  // };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {/* Text field for Title */}
      <div>
        <TextField
          id="standard-textarea"
          label="Title"
          placeholder="Type task title"
          multiline
          variant="standard"
          value={newTaskTitle}
          onChange={handleChangeTitle}
        />
      </div>

      {/* Text field for Details */}
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Details"
          multiline
          rows={4}
          defaultValue=""
          value={newTaskDetails}
          onChange={handleChangeDetails}
        />
      </div>

      {/* Priority Selector */}
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="new-task-priority-label">Priority</InputLabel>
          <Select
            labelId="new-task-priority-label"
            id="new-task-priority"
            value={newTaskPriority}
            onChange={handleChangePriority}
            label="Priority"
          >
            <MenuItem value={0}>
              <em>- None -</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Bucket Selector */}
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="new-task-bucket-label">Select Bucket</InputLabel>
          <Select
            labelId="new-task-bucket-label"
            id="new-task-bucket"
            value={newTaskBucket}
            onChange={handleChangeBucket}
            label="Select Bucket"
          >
            <MenuItem value={"No Bucket"}>
              <em>- None -</em>
            </MenuItem>
            <MenuItem value={"New Bucket"}>
              <em>- New Bucket -</em>
            </MenuItem>
            {bucketList.map((bucket) => {
              return (
                <MenuItem key={bucket.id} value={bucket.id}>
                  {bucket.name}
                </MenuItem>
              );
            })}
          </Select>

          {/* If "New Bucket" is selected, render text field for new bucket's title  */}
          {newTaskBucket === "New Bucket" && (
            <TextField
              id="new-task-bucket-name"
              label="Bucket Name"
              variant="standard"
            />
          )}
        </FormControl>
      </div>

      {/* Date and Time Selector */}
      <div>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DateTimePicker
            label="Due Date and Time"
            value={newTaskDue}
            onChange={handleChangeDue}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>

      {/* Cancel and Submit Buttons */}
      <Stack direction="row" spacing={2}>
        <Button
          onClick={handleCancel}
          variant="outlined"
          startIcon={<CancelIcon />}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};
