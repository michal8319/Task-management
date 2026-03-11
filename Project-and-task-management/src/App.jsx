import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import  Login from './pages/Login'
// import ProjectDetails from './pages/ProjectDetails'
// import ProjectMain from './pages/ProjectMain'
// import AddProject from './components/AddProject'
// import CangeStatusTask from './components/CangeStatusTask'
// import CreateProject from './components/CreateProject'
// import CreateTask from './components/CreateTask'
// import DeleteProject from './components/DeleteProject'
// import DeleteTask from './components/DeleteTask'
// import UpdateProject from './components/UpdateProject'
// import UpdateTask from './components/UpdateTask'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
     
      <Router>
       <Routes>
         <Route path="/" element={<Home />} />  
         <Route path="/Login" element={<Login/>}/> 
    //      {/* <Route path="/ProjectDetails" element={<ProjectDetails/>}/>
    //      <Route path="/ProjectMain" element={<ProjectMain/>}/> */}
    //      {/* <Route path="/AddProject" element={<AddProject/>}/>
    // //     <Route path="/CangeStatusTask" element={<CangeStatusTask/>}/>
    // //     <Route path="/CreateProject" element={<CreateProject/>}/>
    // //     <Route path="/CreateTask" element={<CreateTask/>}/>
    // //     <Route path="/DeleteProject" element={<DeleteProject/>}/>
    // //     <Route path="/DeleteTask" element={<DeleteTask/>}/>
    // //     <Route path="/UpdateProject" element={<UpdateProject/>}/>
    // //     <Route path="/UpdateTask" element={<UpdateTask/>}/>  */}
      </Routes>
     </Router> 
  
  );
}
export default App;


