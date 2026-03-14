import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { addProject } from "../store/ProjectSlice";


const CreateProject = ({ closeForm }) => {

  const dispatch = useDispatch();

const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {

    dispatch(addProject({
      id: Date.now(),
      name: data.name,
      description: data.description,
      createdAt: new Date().toISOString()
    }));

    reset();

    closeForm();
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField
        label="Project Name"
      {...register("name", { required: "Project name is required" })}        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Description"
     {...register("description", { required: "Description is required" })}        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <Button type="submit" variant="contained">
        Add Project
      </Button>

    </form>

  );
};

export default CreateProject;