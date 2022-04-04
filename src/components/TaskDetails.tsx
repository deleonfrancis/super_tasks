import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

export interface TaskProps {
  title: string;
  details?: string;
  priority: number;
  bucket?: string;
  dueDate?: string;
  dateCreated?: string;
  isCompleted: boolean;
}

export const TaskDetails: React.FC<TaskProps> = ({
  isCompleted = false,
  priority = 0,
  ...props
}) => {
  //   const [taskTitle, setTaskTitle] = useState<string>();
  //   const [taskDetails, setTaskDetails] = useState<string>();
  //   const [dateAndTime, setDateAndTime] = useState<string>("")

  //   const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTaskTitle(event.target.value);
  //   };
  //   const handleChangeDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTaskDetails(event.target.value);
  //   };

  return (
    <div></div>
    // <Box
    //   component="form"
    //   sx={{
    //     "& .MuiTextField-root": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <div>
    //     <TextField
    //       id="standard-textarea"
    //       label="Title"
    //       placeholder="Type task title"
    //       multiline
    //       variant="standard"
    //       value={taskTitle}
    //       onChange={handleChangeTitle}
    //     />
    //   </div>
    //   <div>
    //     <TextField
    //       id="standard-multiline-static"
    //       label="Details"
    //       multiline
    //       rows={4}
    //       defaultValue=""
    //       variant="standard"
    //       value={taskDetails}
    //       onChange={handleChangeDetails}
    //     />
    //   </div>
    // </Box>
  );
};
