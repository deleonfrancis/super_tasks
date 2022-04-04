import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export interface NewTaskProps {
  handleSubmit: () => void;
  handleCancel: () => void;
  handleClose: () => void;
}

export const NewTask: React.FC<NewTaskProps> = (props) => {
  const { handleSubmit, handleCancel, handleClose } = props;
  const [taskTitle, setTaskTitle] = useState<string>();
  const [taskDetails, setTaskDetails] = useState<string>();
  //   const [dateAndTime, setDateAndTime] = useState<string>("")

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };
  const handleChangeDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDetails(event.target.value);
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
      <div>
        <TextField
          id="standard-textarea"
          label="Title"
          placeholder="Type task title"
          multiline
          variant="standard"
          value={taskTitle}
          onChange={handleChangeTitle}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Details"
          multiline
          rows={4}
          defaultValue=""
          value={taskDetails}
          onChange={handleChangeDetails}
        />
      </div>
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
