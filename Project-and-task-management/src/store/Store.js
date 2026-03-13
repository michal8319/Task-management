import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./ProjectSlice";
import taskReducer from "./TasksSlice";
import userReducer from "./UserSlice";
import taskIdReducer from "./TaskIdSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
    user: userReducer,
    taskId: taskIdReducer,
  }
});

