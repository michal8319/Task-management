<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit"
const ProjectSlice=createSlice({
    name:"projects",
    initialState:[],
    reducers:{
        addProject:(state,action) =>
        {
         state.push(action.payload)
        },
        deleteProject:(state,action) =>
        {
         return state.filter(project => project.id !== action.payload);
        },
        updateProject:(state,action) =>
        {
         const index=state.findIndex(p => p.id===action.payload.id);
         state[index] = action.payload;
        }
    }
});
export const { addProject, deleteProject, updateProject } = ProjectSlice.actions;
export default ProjectSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice= createSlice({
    name:project,
    initialState:[],
    reducers:{
        addProject:(state,action)=>{
            state.push(action.payload);
        },
        deleteProject:(state,action)=>{
            return state.filter(project=>project.id!=action.payload)
        },
        updateProject:(state,action)=>{
          const index=state.findIndex(p=>p.id==action.payload.id);
          state[index]=action.payload;
        }
    }

});
export const{addProject,deleteProject,updateProject}=ProjectSlice.actions;
export default ProjectSlice.reducer;
>>>>>>> c96b055c50d1da7c05d0a2d09b19643ea7643df5
