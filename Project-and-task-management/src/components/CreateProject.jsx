import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { addProject } from "../store/ProjectSlice";

const CreateProject = () => {

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {

    dispatch(addProject({
      id: Date.now(),
      name: data.name,
      description: data.description,
      createdAt: new Date().toISOString()
    }));

    reset();
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField
        label="Project Name"
        {...register("name", { required: true })}
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Description"
        {...register("description")}
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <Button type="submit" variant="contained">
        Add Project
      </Button>

    </form>

  );
};

export default CreateProject;