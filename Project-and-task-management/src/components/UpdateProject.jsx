import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { useState } from "react";
import { updateProject } from "../store/ProjectSlice";

const UpdateProject = ({ project }) => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: project.name,
      description: project.description
    }
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {

    dispatch(updateProject({
      id: project.id,
      name: data.name,
      description: data.description
    }));

    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Update
      </Button>

      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>Update Project</DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>

          <DialogContent>

            <TextField
              label="Project name"
              {...register("name", { required: true })}
              fullWidth
              sx={{ marginBottom: 2 }}
            />

            <TextField
              label="Description"
              {...register("description")}
              fullWidth
            />

          </DialogContent>

          <DialogActions>

            <Button onClick={handleClose}>
              Cancel
            </Button>

            <Button type="submit" variant="contained">
              Save
            </Button>

          </DialogActions>

        </form>

      </Dialog>
    </>
  );
};

export default UpdateProject;