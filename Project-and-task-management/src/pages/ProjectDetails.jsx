// import Box from '@mui/material/Box';
// import PropTypes from 'prop-types';
// import { useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
// import TaskCard from '../components/TaskCard';
// import { Button } from '@mui/material';
// import CreateTask from '../components/CreateTask';

// function Item(props) {
//   const { sx, ...other } = props;
//   return(
//     <Box
//   sx={[
//     (theme) => ({
//       bgcolor: '#fff',
//       color: 'grey.800',
//       border: '4px solid',
//       borderColor: 'grey.300',
//       p: 2,
//       borderRadius: 2,

//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "flex-start",  
//       alignItems: "center",

//       textAlign: 'center',
//       fontSize: '1.5rem',
//       fontWeight: '1000',

//       ...theme.applyStyles('dark', {
//         bgcolor: '#101010',
//         color: 'grey.300',
//         borderColor: 'grey.800',
//       }),
//     }),
//     ...(Array.isArray(sx) ? sx : [sx]),
//   ]}
//   {...other}
// />
// )}

// Item.propTypes = {
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
//     ),
//     PropTypes.func,
//     PropTypes.object,
//   ]),
// };

// const ProjectDetails=()=>{
//   const {id}=useParams();
//   const tasks = useSelector((state) => state.tasks);
//   const projectTasks = tasks.filter(task => task.projectId === Number(id));
//   const backlogTasks = projectTasks.filter(task => task.status === "Backlog");
//   const progressTasks = projectTasks.filter(task => task.status === "In Progress");
//   const reviewTasks = projectTasks.filter(task => task.status === "In Review");
//   const doneTasks = projectTasks.filter(task => task.status === "Done");

//     return(
//         <>
//       {/* <Box sx={{fontSize: "2rem",fontWeight: "bold",textAlign: "center",mt: 2,mb: 4}}>TASKS</Box>
//       <CreateTask projectId={Number(id)}/>
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: 2,
//           width: "100%",
//           padding: 2
//         }}
// ></Box>
      
//       <Box sx={{ mx: 'auto', width: 200 }}></Box>
    
// <Box
//   sx={{
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: 2,
//     width: "100%",       // תופס את כל הרוחב
//     paddingX: 2,         // מרווח קל מצדדים
//     boxSizing: "border-box",
//   }}
// >
//   <Item>Backlog{backlogTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
//   <Item>In Progress{progressTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
//   <Item>In Review{reviewTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
//   <Item>Done{doneTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
// </Box> */}
// <Box sx={{ display: "flex", justifyContent: "flex-start", paddingLeft: "20px", paddingRight: "20px" }}>
//   <Box sx={{ width: "100%", maxWidth: 1200 }}>
//     <Box sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", mt: 2, mb: 2 }}>
//       TASKS
//     </Box>
//     <CreateTask projectId={Number(id)} />
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: "repeat(4, 1fr)",
//         gap: 2,
//         width: "100%",
//         height: "calc(100vh - 120px)",
//         boxSizing: "border-box",
//       }}
//     >
//       <Item>Backlog{backlogTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
//       <Item>In Progress{progressTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
//       <Item>In Review{reviewTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
//       <Item>Done{doneTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
//     </Box>
//   </Box>
// </Box>





//   </>
//     )
// }
// export default ProjectDetails


import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import CreateTask from '../components/CreateTask';

function Item(props) {
  const { sx, ...other } = props;
  return(
    <Box
  sx={[
    (theme) => ({
      bgcolor: '#fff',
      color: 'grey.800',
      border: '4px solid',
      borderColor: 'grey.300',
      p: 2,
      borderRadius: 2,
      minWidth: 0,

      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",  
      alignItems: "center",

      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: '1000',

      ...theme.applyStyles('dark', {
        bgcolor: '#101010',
        color: 'grey.300',
        borderColor: 'grey.800',
      }),
    }),
    ...(Array.isArray(sx) ? sx : [sx]),
  ]}
  {...other}
/>
)}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const ProjectDetails=()=>{
  const {id}=useParams();
  const tasks = useSelector((state) => state.tasks);
  const projectTasks = tasks.filter(task => task.projectId === Number(id));
  const backlogTasks = projectTasks.filter(task => task.status === "Backlog");
  const progressTasks = projectTasks.filter(task => task.status === "In Progress");
  const reviewTasks = projectTasks.filter(task => task.status === "In Review");
  const doneTasks = projectTasks.filter(task => task.status === "Done");
    return(
        <>
      <Box sx={{fontSize: "2rem",fontWeight: "bold",textAlign: "center",mt: 2,mb: 4}}>TASKS</Box>
       <CreateTask projectId={Number(id)}/>

      <Box sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        width: "100%",
        height: "80vh",
        gap: 2,
        boxSizing: "border-box",
        px: 2
      }}>
      
        <Item>Backlog{backlogTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
        <Item>In Progress{progressTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
        <Item>In Review{reviewTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>
        <Item>Done{doneTasks.map(task => (<TaskCard key={task.id} task={task}/>))}</Item>

      </Box>
  </>
    )
}
export default ProjectDetails