import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { updateTask } from "../store/TasksSlice";
import { useForm } from "react-hook-form";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

const UpdateTask = ({ task }) => {

  const dispatch = useDispatch();

  const {register,handleSubmit,setValue,formState: { errors }} = useForm({
      defaultValues: {
      title: task.title,
      description: task.description,
      priority: task.priority,
      deadline: task.deadline
    }});

  const onSubmit = (data) => {
    dispatch(updateTask({
        id: task.id,
        title: data.title,
        description: data.description,
        status: task.status,
        priority: data.priority,
        deadline: data.deadline
      }));};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField label="Title"{...register("title", {required: "Title is required",
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

      <Select defaultValue={task.priority}onChange={(event, value) => setValue("priority", value)}>
        <Option value="low">Low</Option>
        <Option value="medium">Medium</Option>
        <Option value="high">High</Option>
      </Select>

      <Stack spacing={1.5} sx={{ minWidth: 300 }}>
        <Input type="date"{...register("deadline", {required: "Deadline is required"})}/>
      </Stack>

      <Button type="submit" variant="outlined">Update</Button>

    </form>
  );
};

export default UpdateTask;