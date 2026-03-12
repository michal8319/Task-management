import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import ChangeStatusTask from "./ChangeStatusTask";

const TaskCard = ({ task }) => {

  return (
    <Box sx={{border: "2px solid #ccc",borderRadius: 2,p: 2,mb: 2,width: "90%",backgroundColor: "#f9f9f9",textAlign: "left"}}>
      
      <Typography variant="h6">{task.title}</Typography>

      <Typography variant="body2">{task.description}</Typography>

      <Typography variant="body2">Priority: {task.priority}</Typography>

      <Typography variant="body2">status: {task.status}</Typography>

      <Typography variant="body2">Deadline: {task.deadline}</Typography>

      <Box sx={{display:"flex",gap:1,mt:1}}>
        <ChangeStatusTask task={task}/>
        <UpdateTask task={task}/>
        <DeleteTask id={task.id}/>
      </Box>

    </Box>
  );
};

export default TaskCard;