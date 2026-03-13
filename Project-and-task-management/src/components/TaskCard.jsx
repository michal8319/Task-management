import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import ChangeStatusTask from "./ChangStatusTask";

const TaskCard = ({ task }) => {

  const [showUpdate,setShowUpdate] = useState(false)
  const [showStatus,setShowStatus] = useState(false)

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: 2,
        p: 1.5,
        mb: 1.5,
        backgroundColor: "#fff",
        fontSize: "14px"
      }}
    >

      <Typography fontWeight="bold">{task.title}</Typography>

      <Typography variant="body2">
        {task.description}
      </Typography>

      <Typography variant="caption">
        Priority: {task.priority}
      </Typography>

      <Typography variant="caption" display="block">
        Deadline: {task.deadline}
      </Typography>

      {/* כפתורים */}
      <Box sx={{display:"flex",gap:1,mt:1,flexWrap:"wrap"}}>

        <Button
          size="small"
          variant="outlined"
          onClick={()=>setShowStatus(!showStatus)}
        >
          Status
        </Button>

        <Button
          size="small"
          variant="outlined"
          onClick={()=>setShowUpdate(!showUpdate)}
        >
          Edit
        </Button>

        <DeleteTask id={task.id}/>

      </Box>

      {showStatus && <ChangeStatusTask task={task}/>}

      {showUpdate && <UpdateTask task={task}/>}

    </Box>
  );
};

export default TaskCard;