import { Card, CardContent, Typography, Button } from "@mui/material";
import { deleteProject, updateProject } from "../store/ProjectSlice";
import DeleteProject from "./DeleteProject";
import UpdateProject from "./UpdateProject";


const ProjectCard = ({ project }) => {
  return (
    <Card style={{ marginBottom: "15px" }}>
      <CardContent>

        <Typography variant="h6">
          {project.name}
        </Typography>

        <Typography>
          {project.description}
        </Typography>

       <UpdateProject project={project} />
       <DeleteProject id={project.id} />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;