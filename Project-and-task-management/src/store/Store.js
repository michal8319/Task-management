import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./ProjectSlice";
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
    taskId: taskIdReducer,
  }
});
