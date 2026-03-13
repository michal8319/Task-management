import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { addTask } from "../store/TasksSlice";
import { useForm } from "react-hook-form";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

const CreateTask = () => {

  const dispatch = useDispatch();

  const {register,handleSubmit,setValue,formState: { errors }} = useForm({defaultValues: {
      title: "",
      description: "",
      status: "Backlog",
      priority: "low",
      deadline: new Date().toISOString().split("T")[0]
    }
  });

  const onSubmit = (data) => {
    dispatch(addTask({id: Date.now(),...data}));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField
        label="Title"
        {...register("title",{
          required: "Title is required",
          minLength: {
            value: 3,
            message: "Title must be at least 3 characters"
          }
        })}
        error={!!errors.title}
        helperText={errors.title?.message}
      />

      <TextField label="Description"{...register("description", {required: "Description is required"})}
        error={!!errors.description}
        helperText={errors.description?.message}
      />

      <Select defaultValue="Backlog" onChange={(event, value) => setValue("status", value)}>
        <Option value="Backlog">Backlog</Option>
        <Option value="In Progress">In Progress</Option>
        <Option value="In Review">In Review</Option>
        <Option value="Done">Done</Option>
      </Select>

      <Select defaultValue="low" onChange={(event, value) => setValue("priority", value)}>
        <Option value="low">Low</Option>
        <Option value="medium">Medium</Option>
        <Option value="high">High</Option>
      </Select>

      <Stack spacing={1.5} sx={{ minWidth: 300 }}>
        <Input type="date"{...register("deadline", {required: "Deadline is required"})}/>
      </Stack>

      <Button type="submit" variant="outlined">Create</Button>

    </form>
  );
};

export default CreateTask;