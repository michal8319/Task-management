import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteProject from "./DeleteProject";
import UpdateProject from "./UpdateProject";

const ProjectCard = ({ project }) => {

  const navigate = useNavigate();

  const goToProject = () => {
    navigate(`/ProjectDetails/${project.id}`);
  };

  return (
    <Card
      onClick={goToProject}
      sx={{
        marginBottom: "15px",
        cursor: "pointer"
      }}
    >
      <CardContent>

        <Typography variant="h6">
          {project.name}
        </Typography>

        <Typography>
          {project.description}
        </Typography>

        <div onClick={(e) => e.stopPropagation()}>
          <UpdateProject project={project} />
          <DeleteProject id={project.id} />
        </div>

      </CardContent>
    </Card>
  );
};

export default ProjectCard;