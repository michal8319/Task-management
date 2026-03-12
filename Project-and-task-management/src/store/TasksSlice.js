import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "tasks",
  initialState:[
  {
    id: 1,
    projectId: 1,
    title: "Design homepage",
    description: "Create UI design for homepage",
    status: "Backlog",
    priority: "high",
    deadline: "2026-03-20"
  },
  {
    id: 2,
    projectId: 1,
    title: "Build navbar",
    description: "Responsive navigation bar",
    status: "In Progress",
    priority: "medium",
    deadline: "2026-03-22"
  },
  {
    id: 3,
    projectId: 1,
    title: "Connect API",
    description: "Fetch data from backend",
    status: "In Review",
    priority: "high",
    deadline: "2026-03-25"
  },
  {
    id: 4,
    projectId: 1,
    title: "Deploy website",
    description: "Upload website to server",
    status: "Done",
    priority: "medium",
    deadline: "2026-03-28"
  },

  {
    id: 5,
    projectId: 2,
    title: "Login screen",
    description: "Create login UI",
    status: "Backlog",
    priority: "low",
    deadline: "2026-03-18"
  },
  {
    id: 6,
    projectId: 2,
    title: "Authentication",
    description: "Implement login logic",
    status: "In Progress",
    priority: "high",
    deadline: "2026-03-24"
  },

  {
    id: 7,
    projectId: 3,
    title: "Prepare ads",
    description: "Design advertising materials",
    status: "Backlog",
    priority: "medium",
    deadline: "2026-03-21"
  },
  {
    id: 8,
    projectId: 3,
    title: "Publish campaign",
    description: "Launch marketing campaign",
    status: "Done",
    priority: "high",
    deadline: "2026-03-30"
  }
],
  reducers: {

    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },

    updateTask: (state, action) => {
      const index = state.findIndex(t => t.id === action.payload.id);
      state[index] = action.payload;
    },

    changeStatus: (state, action) => {
      const task = state.find(t => t.id === action.payload.id);
      task.status = action.payload.status;
    }

  }
});

export const { addTask, deleteTask, updateTask, changeStatus } = TaskSlice.actions;
export default TaskSlice.reducer;