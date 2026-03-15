import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {Button,TextField,Dialog,DialogTitle,DialogContent,DialogActions,Select,MenuItem} from "@mui/material";
import { useState } from "react";
import { updateTask } from "../store/TasksSlice";

const UpdateTask = ({ task }) => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: task.title,
      description: task.description,
      priority: task.priority,
      deadline: task.deadline
    }
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit = (data) => {
    dispatch(updateTask({
      id: task.id,
      projectId:task.projectId,
      title: data.title,
      description: data.description,
      status: task.status,
      priority: data.priority,
      deadline: data.deadline
    }));
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>Update</Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">

        <DialogTitle>Update Task</DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>

          <DialogContent>

            <TextField label="Title"{...register("title", { required: true })}fullWidth sx={{ mb: 2 }}/>

            <TextField label="Description"{...register("description")}fullWidth sx={{ mb: 2 }}/>

            <Select defaultValue={task.priority}fullWidth sx={{ mb: 2 }}onChange={(e) => setValue("priority", e.target.value)}>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>

            <TextField type="date"{...register("deadline", { required: true })}fullWidth InputLabelProps={{ shrink: true }}/>

          </DialogContent>

          <DialogActions>

            <Button onClick={handleClose}>Cancel</Button>

            <Button type="submit" variant="contained">Update</Button>

          </DialogActions>

        </form>

      </Dialog>
    </>
  );
};

export default UpdateTask;
