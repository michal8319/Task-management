import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "tasks",
  initialState: [],
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