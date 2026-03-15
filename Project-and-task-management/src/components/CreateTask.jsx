import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {Button,TextField,Dialog,DialogTitle,DialogContent,DialogActions,Select,MenuItem} from "@mui/material";
import { useState } from "react";
import { addTask } from "../store/TasksSlice";

const CreateTask = ({projectId}) => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: "Backlog",
      priority: "low",
      deadline: new Date().toISOString().split("T")[0]
    }
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit = (data) => {
    dispatch(addTask({
        id: Date.now(),
        projectId:projectId,
        ...data
      }));
    handleClose();
  };

  return (
    <>
     <Button variant="contained" onClick={handleOpen} sx={{ mb: 2 }}>Create Task</Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">

        <DialogTitle>Create Task</DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>

          <DialogContent>

            <TextField
              label="Title"
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters"
                }
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              label="Description"
              {...register("description", {
                required: "Description is required"
              })}
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
              sx={{ mb: 2 }}
            />

            <Select defaultValue="Backlog"fullWidth sx={{ mb: 2 }}onChange={(e) => setValue("status", e.target.value)}>
              <MenuItem value="Backlog">Backlog</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="In Review">In Review</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
            </Select>

            <Select defaultValue="low"fullWidth sx={{ mb: 2 }}onChange={(e) => setValue("priority", e.target.value)} >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>

            <TextField type="date"{...register("deadline", { required: "Deadline is required" })}fullWidth />

          </DialogContent>

          <DialogActions>

            <Button onClick={handleClose}>Cancel</Button>

            <Button type="submit" variant="contained">Create</Button>

          </DialogActions>

        </form>

      </Dialog>
    </>
  );
};
export default CreateTask;
