import { changeStatus } from "../store/TasksSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {Button,Dialog,DialogTitle,DialogContent,DialogActions} from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

const ChangeStatusTask = ({ task }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const { handleSubmit, setValue } = useForm({defaultValues: {status: task.status}});

  const onSubmit = (data) => {
    dispatch(changeStatus({
      id: task.id,
      title: task.title,
      description: task.description,
      status: data.status,
      priority: task.priority,
      deadline: task.deadline
    }));};

  return (
<>
    <Button variant="outlined" onClick={handleOpen}>
            Change status
          </Button>
    
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
    
            <DialogTitle>Change status</DialogTitle>
    
            <form onSubmit={handleSubmit(onSubmit)}>
    
              <DialogContent>
                  <Select
                    defaultValue={task.status}
                    onChange={(e) => setValue("status", e.target.value)}
                    fullWidth
                  >
                    <MenuItem value="Backlog">Backlog</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="In Review">In Review</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                  </Select>
    
              </DialogContent>
    
              <DialogActions>
    
                <Button onClick={handleClose}>
                  Cancel
                </Button>
    
                <Button type="submit" variant="contained">
                  Update
                </Button>
    
              </DialogActions>
    
            </form>
    
          </Dialog>
      </>    
  );
};

export default ChangeStatusTask;