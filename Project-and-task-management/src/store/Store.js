import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import projectReducer from "./ProjectsSlice";
=======
import projectReducer from "./ProjectSlice";
>>>>>>> c96b055c50d1da7c05d0a2d09b19643ea7643df5
import taskReducer from "./TaskSlice";
import userReducer from "./UserSlice";
import projectIdReducer from "./ProjectIdSlice";
import taskIdReducer from "./TaskIdSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
    user: userReducer,
    projectId: projectIdReducer,
    taskId: taskIdReducer
  }
});
