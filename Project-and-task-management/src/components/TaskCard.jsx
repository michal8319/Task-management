import { Card, CardContent, Typography, Box } from "@mui/material";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import ChangeStatusTask from "./ChangStatusTask";

const TaskCard = ({ task }) => {

  return (
    <Card sx={{marginBottom: "10px",width: "100%",boxSizing: "border-box"}}>

      <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>

        <Typography variant="h6" sx={{ fontSize: "1rem" }}>{task.title}</Typography>

        <Typography sx={{ fontSize: "0.8rem" }}>{task.description}</Typography>

        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>Priority: {task.priority}</Typography>

        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>Deadline: {task.deadline}</Typography>

        <Box sx={{ display: "flex", gap: 0.5, marginTop: 0.5 }}onClick={(e) => e.stopPropagation()}>
          <ChangeStatusTask task={task} />
          <UpdateTask task={task} />
          <DeleteTask id={task.id} />
        </Box>

      </CardContent>
      
    </Card>
  );
};

export default TaskCard;