import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { NewTask } from "./NewTask";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ModalNewTask: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    console.log("submit");
  };

  const handleCancel = () => {
    console.log("cancel");
    handleClose();
  };

  return (
    <div>
      <Button style={{ textTransform: "none" }} onClick={handleOpen}>
        <AddIcon />
        add task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // style={{ outline: "none" }}
      >
        <Box sx={style}>
          <NewTask
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />
        </Box>
      </Modal>
    </div>
  );
};
