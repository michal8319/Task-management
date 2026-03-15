import { Card, CardContent, Typography, Box } from "@mui/material";
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
        display: "flex",
        cursor: "pointer",
        borderRadius: 3,
        transition: "0.2s",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-3px)"
        }
      }}
    >
      <Box
        sx={{
          width: "6px",
          backgroundColor: "#2da44e" 
        }}
      />

      <CardContent sx={{ flex: 1 }}>

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {project.name}
        </Typography>

        <Typography sx={{ mb: 1 }}>
          {project.description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Created: {project.createdAt}
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