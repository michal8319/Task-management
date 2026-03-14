import { Button, Typography, Box } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import CreateProject from "../components/CreateProject";

const ProjectMain = () => {

  const projects = useSelector((state) => state.projects || []);
  const [showCreate,setShowCreate] = useState(false);

  return (
    <>

      <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        mb:4
      }}>

       <Typography
  variant="h4"
  sx={{ 
    textAlign: "center",
    mb: 4,
    fontWeight: "bold"
  }}
>
  My Projects
</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={()=>setShowCreate(true)}
        >
          Add project
        </Button>

      </Box>

      {showCreate && (
        <CreateProject closeForm={() => setShowCreate(false)} />
      )}

      {/* Grid של פרויקטים */}
   <Box
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: 3
  }}
>
  {projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</Box>

    </>
  );
};

export default ProjectMain;