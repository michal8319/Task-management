import { createSlice } from "@reduxjs/toolkit"

const ProjectSlice=createSlice({
    name:"projects",
    initialState : [
    {
        id: 1,
        name: "Website Project",
        description: "Building a company website"
    },
    {
        id: 2,
        name: "Mobile App",
        description: "Developing a task management mobile application"
    },
    {
        id: 3,
        name: "Marketing Campaign",
        description: "Managing the company marketing campaign"
    }
],
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
