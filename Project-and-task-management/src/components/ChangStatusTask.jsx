import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { changeStatus } from "../store/TaskSlice";
import { useForm } from "react-hook-form";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const ChangeStatusTask = ({ task }) => {

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
    <form onSubmit={handleSubmit(onSubmit)}>

      <Select defaultValue={task.status} onChange={(event, value) => setValue("status", value)}>
        <Option value="Backlog">Backlog</Option>
        <Option value="In Progress">In Progress</Option>
        <Option value="In Review">In Review</Option>
        <Option value="Done">Done</Option>
      </Select>

      <Button type="submit" variant="outlined">Change status</Button>

    </form>
  );
};

export default ChangeStatusTask;