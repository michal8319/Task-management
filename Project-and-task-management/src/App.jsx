import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import  Login from './pages/Login'
import ProjectDetails from './pages/ProjectDetails'
import ProjectMain from './pages/ProjectMain'
import CangeStatusTask from './components/ChangStatusTask'
import CreateProject from './components/CreateProject'
import CreateTask from './components/CreateTask'
import DeleteProject from './components/DeleteProject'
import DeleteTask from './components/DeleteTask'
import UpdateProject from './components/UpdateProject'
import UpdateTask from './components/UpdateTask'
import ProjectCard  from './components/ProjectCard '
import TaskCard from './components/TaskCard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (    
      <Router>
       <Routes>
             <Route path="/" element={<Home/>}/> 
             <Route path="/Login" element={<Login/>}/> 
             <Route path="/ProjectDetails/:id" element={<ProjectDetails/>}/>
             <Route path="/ProjectMain" element={<ProjectMain/>}/>
             <Route path="/CangeStatusTask" element={<CangeStatusTask/>}/> 
             <Route path="/CreateProject" element={<CreateProject/>}/>
             <Route path="/CreateTask" element={<CreateTask/>}/>
             <Route path="/DeleteProject" element={<DeleteProject/>}/>
             <Route path="/DeleteTask" element={<DeleteTask/>}/>
             <Route path="/UpdateProject" element={<UpdateProject/>}/>
             <Route path="/UpdateTask" element={<UpdateTask/>}/>
             <Route path="/ProjectCard" element={<ProjectCard/>}/>
             <Route path="/TaskCard" element={<TaskCard/>}/>
      </Routes>
     </Router> 
  
  );
}
export default App;


