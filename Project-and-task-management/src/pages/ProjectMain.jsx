import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ProjectCard from '../components/ProjectCard ';
const ProjectMain=()=>{
const projects = useSelector((state) => state.projects.projects || []);
 return(
   <>
   <div>
     <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>

    <Button startDecorator={<Add/>}>Add project</Button></div>
    <div style={{ marginBottom: "20px" }}>
   {projects.map((project) => (
   <ProjectCard key={project.id} project={project} />
  ))}
</div>
    </>
    )}
export default ProjectMain;
